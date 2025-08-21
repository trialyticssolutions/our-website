# Data Consulting Agency Website

A modern, production-ready website for a data consulting agency built with Next.js, TypeScript, and Tailwind CSS. Features include a complete contact form with Firestore integration, responsive design, SEO optimization, and comprehensive service pages.

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional design with responsive layouts
- **Contact Form**: Working contact form with Firestore integration and reCAPTCHA protection
- **Service Pages**: Detailed service descriptions with features and benefits
- **Portfolio Showcase**: Case studies with modal dialogs for detailed views
- **Client Testimonials**: Carousel testimonials with star ratings
- **Team Section**: Meet the team with social links and expertise areas
- **Floating Widgets**: WhatsApp integration for easy contact

### Technical Features
- **Next.js 14**: Latest Next.js with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Shadcn/ui**: High-quality, accessible UI components
- **Framer Motion**: Smooth animations and transitions
- **SEO Optimized**: Meta tags, schema markup, and performance optimization
- **Responsive**: Mobile-first design with perfect responsiveness
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes

### Backend Features
- **EmailJS Integration**: Contact form submissions sent via EmailJS
- **Rate Limiting**: Protection against spam and abuse
- **Input Validation**: Client and server-side validation
- **reCAPTCHA**: Spam protection with Google reCAPTCHA v3
- **Email Notifications**: Ready for email service integration

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- EmailJS account (free tier: 200 emails/month)
- reCAPTCHA keys (optional, for spam protection)

### 1. Clone and Install
```bash
git clone <repository-url>
cd data-consulting-agency-website
npm install
```

### 2. Environment Configuration
Copy the example environment file:
```bash
cp env.example .env.local
```

Edit `.env.local` with your actual values:
```env
# EmailJS Configuration (REQUIRED for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CONTACT_EMAIL=info@youragency.com

# reCAPTCHA Configuration (Optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

### 3. EmailJS Setup
1. **Create EmailJS Account**:
   - Go to [emailjs.com](https://www.emailjs.com) and sign up for free
   - Free tier includes 200 emails/month

2. **Add Email Service**:
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Connect your email account

3. **Create Email Template**:
   - Go to "Email Templates" in EmailJS dashboard
   - Click "Create New Template"
   - Use this template structure:
   ```
   Subject: New Contact Form Submission: {{subject}}
   
   From: {{from_name}} <{{from_email}}>
   Phone: {{phone_number}}
   Company: {{company_name}}
   
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Submitted: {{submission_time}}
   ```

4. **Get Your Keys**:
   - Copy your **Service ID** from the Email Services page
   - Copy your **Template ID** from the Email Templates page
   - Copy your **Public Key** from Account > API Keys page

### 4. reCAPTCHA Setup (Optional)
1. Go to https://www.google.com/recaptcha/admin
2. Create a new site with reCAPTCHA v3
3. Add your domain and localhost for testing
4. Copy the site key and secret key to your environment variables

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components (shadcn/ui)
├── data/                 # Static data and constants
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/api/           # API routes (contact form)
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Branding
1. Update `data/constants.ts` with your company information
2. Replace logo in navigation components
3. Update colors in `tailwind.config.js`
4. Add your brand colors to CSS variables in `styles/globals.css`

### Content
- **Services**: Edit the `SERVICES` array in `data/constants.ts`
- **Testimonials**: Update the `TESTIMONIALS` array
- **Portfolio**: Modify the `PORTFOLIO_CASES` array
- **Team**: Update the `TEAM_MEMBERS` array

### Styling
- The project uses Tailwind CSS with a custom design system
- Colors are defined using CSS variables for easy theming
- Components follow the shadcn/ui design system

## 📧 Contact Form

The contact form includes:
- Client-side validation with Zod schema
- Server-side validation and sanitization
- Rate limiting (5 requests per 15 minutes per IP)
- reCAPTCHA spam protection
- EmailJS email delivery
- Toast notifications for user feedback

### Email Notifications
Form submissions are sent via EmailJS to your configured email address with:
- Professional formatting
- All form data included
- Contact information
- Submission timestamp
- No backend server required

### Alternative Options
- **Firebase**: For database storage, check `todo-firebase-setup.md`
- **SMTP**: For custom email servers, check `EMAIL_SETUP_GUIDE.md`

## 🔒 Security Features

- Input sanitization to prevent XSS attacks
- Rate limiting on contact form API
- reCAPTCHA integration for spam protection
- EmailJS secure email delivery
- Next.js security headers
- HTTPS enforcement

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface elements
- Optimized images with Next.js Image component
- Fast loading with code splitting and lazy loading

## 🎯 SEO Features

- Dynamic meta tags for each page
- Schema.org structured data
- Semantic HTML5 markup
- Sitemap generation ready
- Open Graph and Twitter Card support
- Fast loading times (optimized for Core Web Vitals)

## 🧪 Testing

To run type checking:
```bash
npm run type-check
```

To run linting:
```bash
npm run lint
```

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: Target 90+ across all categories
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Image Optimization**: WebP format with responsive images
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you need help with setup or customization:
1. Check the documentation above
2. Review the code comments
3. Create an issue in the repository
4. Contact the development team

## 🚀 Future Enhancements

Potential future features:
- Blog/articles section
- Client login portal
- Multi-language support
- Advanced analytics dashboard
- CRM integration
- Live chat integration
- Payment processing
- Booking system integration

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS. 