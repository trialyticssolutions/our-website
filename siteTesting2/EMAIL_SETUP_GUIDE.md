# Email Setup Guide

## 🚀 Quick Setup for Gmail (Recommended)

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### 2. Create App Password
1. Go to Google Account > Security
2. Click "2-Step Verification"
3. Scroll down to "App passwords"
4. Select "Mail" and your device
5. Copy the generated 16-character password

### 3. Configure Environment Variables
Create `.env.local` in your project root:
```env
# Email Configuration (REQUIRED for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
SMTP_FROM=your_email@gmail.com
CONTACT_EMAIL=info@youragency.com
```

### 4. Test the Setup
1. Run `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your email for the form submission

## 📧 Alternative Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@yahoo.com
SMTP_PASS=your_app_password
```

### Custom SMTP (e.g., cPanel hosting)
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=your_password
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Double-check your app password
   - Ensure 2FA is enabled for Gmail
   - Try using the exact 16-character app password

2. **"Connection timeout"**
   - Check your SMTP_HOST and SMTP_PORT
   - Verify your internet connection
   - Try SMTP_SECURE=true with port 465

3. **"Email not received"**
   - Check spam folder
   - Verify CONTACT_EMAIL is correct
   - Test with a different email provider

### Testing Email Configuration:
```bash
# Test your email setup
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_app_password'
  }
});
transporter.verify((error, success) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('✅ Email configuration is working!');
  }
});
"
```

## 🎨 Email Template

The contact form emails include:
- Professional HTML formatting
- Company branding
- All form fields
- Clickable email and phone links
- Submission timestamp
- Clean text fallback

## 🔒 Security Notes

- App passwords are safer than regular passwords
- SMTP credentials are only stored in environment variables
- Rate limiting prevents spam (5 requests per 15 minutes)
- Input sanitization prevents XSS attacks

## 📱 Production Deployment

### Vercel
1. Add all environment variables in Vercel dashboard
2. Deploy your site
3. Test the contact form on live site

### Other Platforms
All platforms support environment variables:
- Netlify: Site Settings > Environment Variables
- Railway: Variables tab
- DigitalOcean: App Settings > Environment Variables

## 💡 Tips

1. **Use a dedicated email** for contact forms (e.g., `forms@yourdomain.com`)
2. **Set up email filters** to organize form submissions
3. **Monitor email quotas** - Gmail has daily sending limits
4. **Test regularly** to ensure email delivery works
5. **Keep app passwords secure** - never commit them to version control

## 🔄 Switching to Firebase Later

If you want to switch to database storage later:
1. Check `todo-firebase-setup.md` for Firebase configuration
2. The email functionality will remain as backup notification system
3. You can have both database storage AND email notifications 