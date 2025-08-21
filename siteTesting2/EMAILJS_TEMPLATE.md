# EmailJS Template Configuration

## 📧 Email Template for EmailJS Dashboard

Copy this template exactly into your EmailJS dashboard:

### **Template Settings:**
- **Template Name**: `Contact Form Submission`
- **Subject**: `New Contact Form Submission: {{subject}}`
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **To Email**: `Your email address where you want to receive submissions`

### **Email Template (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-box { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; }
        .message-box { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; margin: 20px 0; }
        .footer { background-color: #e9ecef; padding: 15px; font-size: 12px; color: #6c757d; text-align: center; }
        .label { font-weight: bold; color: #007bff; }
        .value { margin-left: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
    </div>
    
    <div class="content">
        <div class="info-box">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><span class="label">Name:</span><span class="value">{{from_name}}</span></p>
            <p><span class="label">Email:</span><span class="value"><a href="mailto:{{from_email}}">{{from_email}}</a></span></p>
            <p><span class="label">Phone:</span><span class="value"><a href="tel:{{phone_number}}">{{phone_number}}</a></span></p>
            <p><span class="label">Company:</span><span class="value">{{company_name}}</span></p>
        </div>

        <div class="message-box">
            <h3 style="color: #007bff; margin-top: 0;">Inquiry Details</h3>
            <p><span class="label">Subject:</span><span class="value">{{subject}}</span></p>
            
            <h4 style="color: #007bff;">Message:</h4>
            <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
        </div>
    </div>

    <div class="footer">
        <p><strong>Submission Time:</strong> {{submission_time}}</p>
        <p><strong>Source:</strong> Data Consulting Agency Website</p>
    </div>
</body>
</html>
```

### **Email Template (Plain Text Fallback):**

```
NEW CONTACT FORM SUBMISSION

Contact Information:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone_number}}
Company: {{company_name}}

Subject: {{subject}}

Message:
{{message}}

Submission Time: {{submission_time}}
Source: Data Consulting Agency Website
```

## 🔧 How to Set Up in EmailJS Dashboard:

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com
2. **Navigate to Email Templates**
3. **Click "Create New Template"**
4. **Fill in the template settings:**
   - Template Name: `Contact Form Submission`
   - Subject: `New Contact Form Submission: {{subject}}`
5. **Copy the HTML template above** into the content area
6. **Add the plain text version** for fallback
7. **Save the template**
8. **Copy your Template ID** (you'll need this for the .env file)

## 📝 What You Need to Complete:

1. **Template ID**: After creating the template, copy the Template ID
2. **Update .env.local** with your credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_k75m0h7
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=H-nIZGWq5SaY9tOfu
NEXT_PUBLIC_CONTACT_EMAIL=your_email@yourdomain.com
```

## 📧 Sample Email You'll Receive:

When someone submits the contact form, you'll receive a professional email like this:

**Subject:** New Contact Form Submission: Website Development Inquiry

**Content:**
- Professional header with your branding
- Contact information (name, email, phone, company)
- Clickable email and phone links
- Full message content
- Submission timestamp
- Source identification

The email will be formatted professionally and easy to read on any device! 