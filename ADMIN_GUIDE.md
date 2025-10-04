<!-- @format -->

# Website Admin System

This project includes a comprehensive admin panel for managing website content through a user-friendly interface. All content is stored in JSON format and can be easily edited through the admin panel.

## Features

- **Complete Content Management**: Edit all website text, images, services, testimonials, and SEO metadata
- **JSON Storage**: All content is stored in `/data/website-content.json` for easy backup and version control
- **Real-time Updates**: Changes are immediately reflected on the website
- **Password Protection**: Simple password authentication to secure the admin panel
- **Responsive Design**: Admin panel works on desktop and mobile devices
- **Form Validation**: Built-in validation and error handling
- **Organized Interface**: Tabbed interface for easy navigation between content sections

## Accessing the Admin Panel

1. Navigate to `/admin` on your website
2. Enter the admin password: `sparkle2024admin`
3. Start editing your website content

## Admin Panel Sections

### 1. Company Information

- Company name and tagline
- Contact details (phone, email, address)
- Basic business information

### 2. Hero Section

- Main homepage title and subtitle
- Call-to-action button text
- Statistics (customers, rating, experience, etc.)

### 3. About Section

- About page content and story
- Company mission statement
- Core values (add/edit/remove)
- "Why choose us" points (add/edit/remove)

### 4. Services Management

- Add, edit, or remove services
- Service details (title, description, price, duration)
- Service features (add/edit/remove)
- Service images

### 5. Customer Testimonials

- Add, edit, or remove customer reviews
- Customer details and ratings
- Review text and location

### 6. SEO Settings

- Meta titles and descriptions
- Page-specific SEO optimization
- Character count indicators

## File Structure

```
/data/
  └── website-content.json     # All website content
/app/
  ├── admin/
  │   └── page.tsx            # Admin panel interface
  └── api/
      └── website-content/
          └── route.ts         # API endpoints for content management
/lib/
  └── websiteContent.ts       # Content management utilities
```

## Content Structure

The JSON file contains the following main sections:

- `company`: Basic company information
- `hero`: Homepage hero section content
- `about`: About page content and company story
- `services`: Array of services with details
- `addOns`: Additional service offerings
- `features`: Company feature highlights
- `testimonials`: Customer reviews
- `seo`: Meta tags and SEO content

## API Endpoints

- `GET /api/website-content`: Retrieve current website content
- `POST /api/website-content`: Update website content

## Security

- Password-protected admin access
- Content validation and sanitization
- Error handling and logging
- Backup recommendations

## Usage Tips

1. **Backup First**: Always backup your content before making major changes
2. **Test Changes**: Preview changes on a staging environment when possible
3. **SEO Optimization**: Keep meta descriptions under 160 characters
4. **Image URLs**: Use high-quality, optimized images for best performance
5. **Content Consistency**: Maintain consistent tone and branding across all content

## Customization

To change the admin password, update the `ADMIN_PASSWORD` constant in `/app/admin/page.tsx`.

For production deployments, consider implementing:

- Database storage instead of JSON files
- More robust authentication (JWT, sessions)
- Role-based access control
- Content versioning and rollback
- Image upload functionality

## Content Updates & Caching

The website uses Next.js server-side rendering which can cache content for performance. To ensure your changes appear immediately:

1. **Automatic Refresh**: After saving changes, the admin panel will automatically refresh pages
2. **Manual Refresh**: Use the "Refresh Pages" button in the admin panel to force an update
3. **Browser Cache**: Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R) if changes don't appear

### Update Process

1. Make your changes in the admin panel
2. Click "Save Changes"
3. Wait for the success notification
4. Pages will automatically refresh to show new content
5. If needed, use "Refresh Pages" button for immediate updates

## Troubleshooting

- **Admin panel not loading**: Check that the API route is accessible
- **Changes not saving**: Verify write permissions on the `/data` directory
- **Content not updating immediately**:
  - Wait 2-3 seconds after saving for automatic refresh
  - Use the "Refresh Pages" button in the admin panel
  - Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
  - Check browser developer console for any errors
- **Authentication issues**: Ensure the correct password is being used
- **Pages showing old content**: The system forces dynamic rendering, but if issues persist, restart your development server

## Support

For technical support or feature requests, contact your development team.
