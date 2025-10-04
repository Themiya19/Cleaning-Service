import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'website-content.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// GET - Read website content
export async function GET() {
  try {
    ensureDataDirectory();
    
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json(
        { error: 'Website content file not found' },
        { status: 404 }
      );
    }

    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const content = JSON.parse(data);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error reading website content:', error);
    return NextResponse.json(
      { error: 'Failed to read website content' },
      { status: 500 }
    );
  }
}

// POST - Update website content
export async function POST(request: NextRequest) {
  try {
    ensureDataDirectory();
    
    const body = await request.json();
    
    // Validate the data structure
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    // Write the data to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(body, null, 2));
    
    // Force revalidation of all pages that use this content
    try {
      // Import revalidatePath from next/cache
      const { revalidatePath } = await import('next/cache');
      
      // Revalidate all main pages
      revalidatePath('/');
      revalidatePath('/about');
      revalidatePath('/services');
      revalidatePath('/areas');
      revalidatePath('/testimonials');
      revalidatePath('/gallery');
      revalidatePath('/faq');
      revalidatePath('/contact');
    } catch (revalidateError) {
      console.warn('Could not revalidate paths:', revalidateError);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Website content updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating website content:', error);
    return NextResponse.json(
      { error: 'Failed to update website content' },
      { status: 500 }
    );
  }
}
