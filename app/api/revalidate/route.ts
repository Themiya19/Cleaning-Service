import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Revalidate all main pages
    const paths = [
      '/',
      '/about', 
      '/services',
      '/areas',
      '/testimonials',
      '/gallery',
      '/faq',
      '/contact'
    ];

    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'All pages revalidated successfully',
      paths: paths,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error revalidating paths:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate pages' },
      { status: 500 }
    );
  }
}

// Allow GET requests for manual triggering
export async function GET() {
  return POST(new NextRequest('http://localhost/api/revalidate'));
}
