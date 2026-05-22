import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized nodemailer transport configuration
let mailTransporter: nodemailer.Transporter | null = null;

function getMailTransporter(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    console.warn(
      '-------------------------------------------------------------------\n' +
      '⚠️  WARNING: SMTP settings are not fully configured in environment.\n' +
      '   Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in secrets.\n' +
      '   Email sending will run in simulation mode for local development.\n' +
      '-------------------------------------------------------------------'
    );
    return null;
  }

  if (!mailTransporter) {
    mailTransporter = nodemailer.createTransport({
      host,
      port: parseInt(port, 10),
      secure: parseInt(port, 10) === 465, // True for port 465, false for other ports (like 587)
      auth: {
        user,
        pass,
      },
    });
  }

  return mailTransporter;
}

// REST API for brochure dispatch
app.post('/api/send-brochure', async (req, res) => {
  const { name, email, projectType, company, country, phone, budget, timeline, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  // Set default from email to the new email
  const fromEmail = process.env.SMTP_FROM || 'techquadruple27@gmail.com';
  const appUrl = process.env.APP_URL || 'https://quadrupletech.com';

  // Beautifully designed HTML welcome template for first timers
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to Quadrupletech Engineering Services</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
          }
          .header {
            background-color: #0b1d33; /* Corporate Deep Blue */
            padding: 40px 30px;
            text-align: center;
            border-bottom: 5px solid #F39C12; /* Warm Amber Accent */
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 26px;
            font-weight: 800;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header p {
            color: #bdc3c7;
            margin: 5px 0 0 0;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .content {
            padding: 40px 30px;
            line-height: 1.6;
          }
          .greeting {
            font-size: 18px;
            font-weight: 700;
            color: #0b1d33;
            margin-bottom: 20px;
          }
          .intro-text {
            font-size: 15px;
            color: #555555;
            margin-bottom: 25px;
          }
          .highlight-box {
            background-color: #f7f9fc;
            border-left: 4px solid #0072BB;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 0 4px 4px 0;
          }
          .highlight-box h3 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #0b1d33;
            font-size: 16px;
            font-weight: 700;
          }
          .highlight-box p {
            margin: 0;
            font-size: 14px;
            color: #666666;
          }
          .list-item {
            margin-bottom: 10px;
            padding-left: 15px;
            position: relative;
            font-size: 14px;
            color: #555555;
          }
          .list-item::before {
            content: "•";
            color: #F39C12;
            font-weight: bold;
            display: inline-block;
            width: 15px;
            margin-left: -15px;
          }
          .cta-section {
            text-align: center;
            margin: 35px 0 15px 0;
          }
          .btn-primary {
            display: inline-block;
            background-color: #F39C12; /* Amber Button */
            color: #ffffff !important;
            padding: 14px 30px;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 10px rgba(243, 156, 18, 0.25);
            transition: all 0.2s ease;
          }
          .btn-secondary {
            display: inline-block;
            background-color: #0072BB; /* Deep Blue Button */
            color: #ffffff !important;
            padding: 14px 30px;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 10px rgba(0, 114, 187, 0.25);
            margin-left: 10px;
            transition: all 0.2s ease;
          }
          .footer {
            background-color: #f7f9fc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #eef2f6;
            font-size: 12px;
            color: #888888;
          }
          .footer p {
            margin: 5px 0;
          }
          .footer a {
            color: #0072BB;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Brand Header -->
          <div class="header">
            <h1>Quadrupletech</h1>
            <p>Engineering Services Ltd.</p>
          </div>

          <!-- Main Content Body -->
          <div class="content">
            <div class="greeting">Dear ${name},</div>

            <p class="intro-text">
              Thank you for reaching out to <strong>Quadrupletech Engineering Services</strong>! We have successfully registered your interest regarding <strong>${projectType}</strong>. It is an absolute privilege to connect with you.
            </p>

            <!-- Corporate Introduction -->
            <div class="highlight-box">
              <h3>Who We Are</h3>
              <p>
                Quadrupletech Engineering Services is an industry-leading, multi-disciplinary engineering, procurement, construction (EPC), and HSE services champion in Nigeria. We deliver world-class infrastructure, mechanical &amp; piping networks, industrial instrumentation, civil structures, and safety management models for manufacturing operations and heavy-duty assets.
              </p>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #0b1d33; font-size: 16px; margin-bottom: 12px;">Our Primary Core Capabilities:</h3>
              <div class="list-item"><strong>EPCC Services:</strong> Turnkey project designs, detailed engineering simulations, fabrication, and physical erections.</div>
              <div class="list-item"><strong>Project Logistics:</strong> End-to-end heavy equipment leasing, secure transit, and direct site delivery.</div>
              <div class="list-item"><strong>HSE &amp; Safety Excellence:</strong> Professional training, LOTO enforcement, BBS audits, and hazard management.</div>
              <div class="list-item"><strong>Fabrication &amp; Maintenance:</strong> Structural weldments, custom plant shut-down support, and pipeline Integrity checks.</div>
            </div>

            <p class="intro-text">
              We have attached a direct link below for you to access and download our fully comprehensive <strong>Company Profile &amp; EPCC Capability Brochure</strong>:
            </p>

            <!-- Call to Actions -->
            <div class="cta-section">
              <a href="${appUrl}/brochure.pdf" target="_blank" class="btn-primary">Download Brochure</a>
              <a href="https://wa.me/2349073463078?text=Hello%20Quadrupletech%2C%20I%20requested%20a%20brochure%20and%20would%20like%20to%20discuss%20a%20project" target="_blank" class="btn-secondary">Contact via WhatsApp</a>
            </div>

            <p class="intro-text" style="text-align: center; margin-top: 30px; font-size: 13px; color: #888888;">
              Need custom scoping immediately? Reply to this email or speak directly with our Lead Engineering Coordinator at <strong>0907 346 3078</strong>.
            </p>
          </div>

          <!-- Footer Legal -->
          <div class="footer">
            <p><strong>Quadrupletech Engineering Services Ltd</strong></p>
            <p>5 Ayegbami Street, Idotun, Lagos Free Zone, Ibeju-Lekki, Lagos, Nigeria.</p>
            <p>
              <a href="mailto:techquadruple27@gmail.com">techquadruple27@gmail.com</a> | 
              <a href="${appUrl}">www.quadrupletech.com</a>
            </p>
            <p style="margin-top: 15px; font-size: 11px;">This is an automated reply. © 2026 Quadrupletech. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // HTML Alert template for the Admin notification
  const alertHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Project Enquiry Alert</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 20px;
          }
          .card {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
            padding: 30px;
          }
          .title {
            font-size: 20px;
            font-weight: 700;
            color: #0b1d33;
            border-bottom: 2px solid #F39C12;
            padding-bottom: 15px;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .row {
            margin-bottom: 12px;
            font-size: 14px;
            display: flex;
          }
          .label {
            font-weight: bold;
            color: #555555;
            width: 150px;
            flex-shrink: 0;
          }
          .value {
            color: #111111;
          }
          .message-box {
            background-color: #f7f9fc;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.5;
            border-left: 4px solid #0072BB;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="title">New Lead: Project Enquiry Received</div>
          <div class="row"><span class="label">Client Name:</span> <span class="value">${name}</span></div>
          <div class="row"><span class="label">Email Address:</span> <span class="value">${email}</span></div>
          <div class="row"><span class="label">Phone:</span> <span class="value">${phone || 'Not Provided'}</span></div>
          <div class="row"><span class="label">Company/Org:</span> <span class="value">${company || 'Not Provided'}</span></div>
          <div class="row"><span class="label">Country:</span> <span class="value">${country || 'Not Provided'}</span></div>
          <div class="row"><span class="label">Project Type:</span> <span class="value">${projectType}</span></div>
          <div class="row"><span class="label">Budget Range:</span> <span class="value">${budget || 'Not Provided'}</span></div>
          <div class="row"><span class="label">Timeline:</span> <span class="value">${timeline || 'Not Provided'}</span></div>
          
          <div class="message-box">
            <strong>Scope Description / Message:</strong><br/>
            <p style="white-space: pre-wrap; margin-top: 10px; margin-bottom: 0;">${message || 'No details provided.'}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = getMailTransporter();

    if (transporter) {
      // 1. Send HTML Welcome or Company Brochure mail to User
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Quadrupletech Engineering'}" <${fromEmail}>`,
        to: email,
        subject: 'Welcome to Quadrupletech Engineering Services - Brochure & Capabilities',
        html: htmlContent,
      });

      // 2. Route the Enquiry lead directly to techquadruple27@gmail.com
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Quadrupletech Enquiry Desk'}" <${fromEmail}>`,
        to: 'techquadruple27@gmail.com',
        subject: `New Project Enq: ${name} (${company || 'Individual'}) - ${projectType}`,
        html: alertHtmlContent,
      });

      console.log(`✉️ Automated responses successfully dispatched via SMTP.`);
      return res.json({ success: true, mode: 'smtp', message: 'Automation triggered successfully.' });
    } else {
      // Simulation mode
      console.log(
        '\n====================== ✉️  SMTP EMAIL SIMULATION MODE (WELCOME TO CLIENT) ======================' +
        `\nTo: ${email}` +
        `\nFrom: ${fromEmail}` +
        `\nSubject: Welcome to Quadrupletech Engineering Services` +
        `\nRecipient Name: ${name}` +
        `\nCore Project Selection: ${projectType}` +
        '\n------------------------------------------------------------' +
        '\n[Melted Email Content snippet]' +
        '\n"Quadrupletech Engineering Services Ltd is an industry-leading, multidisciplined' +
        '\nEPCC and Safety services partner in Nigeria..."' +
        `\nBrochure download link: ${appUrl}/brochure.pdf` +
        '\n========================================================================\n' +
        '\n====================== ✉️  SMTP EMAIL SIMULATION MODE (ENQUIRY ROUTED TO ADMIN) ======================' +
        `\nTo: techquadruple27@gmail.com` +
        `\nFrom: ${fromEmail}` +
        `\nSubject: New Lead: Project Enquiry Received` +
        `\nLead Details:` +
        `\n- Name: ${name}` +
        `\n- Email: ${email}` +
        `\n- Phone: ${phone || 'N/A'}` +
        `\n- Company: ${company || 'N/A'}` +
        `\n- Country: ${country || 'N/A'}` +
        `\n- Budget: ${budget || 'N/A'}` +
        `\n- Timeline: ${timeline || 'N/A'}` +
        `\n- Message: ${message || 'N/A'}` +
        '\n========================================================================\n'
      );
      return res.json({ 
        success: true, 
        mode: 'simulation', 
        message: 'Enquiry automated via email (simulation mode). Configure SMTP variables to send live.' 
      });
    }
  } catch (error) {
    console.error('Failed to dispatch email:', error);
    return res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// REST API for job application alerts and auto-responses
app.post('/api/send-job-application', async (req, res) => {
  const { name, email, phone, role, cvUrl, coverNote } = req.body;

  if (!name || !email || !role || !cvUrl) {
    return res.status(400).json({ error: 'Name, email, role, and CV link are required.' });
  }

  const fromEmail = process.env.SMTP_FROM || 'techquadruple27@gmail.com';
  const appUrl = process.env.APP_URL || 'https://quadrupletech.com';

  // Beautiful HTML auto-response to the applicant
  const applicantHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Application Received - Quadrupletech Engineering Services</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
          }
          .header {
            background-color: #0b1d33;
            padding: 40px 30px;
            text-align: center;
            border-bottom: 5px solid #F39C12;
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 26px;
            font-weight: 800;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header p {
            color: #bdc3c7;
            margin: 5px 0 0 0;
            font-size: 14px;
            font-weight: 500;
          }
          .content {
            padding: 40px 30px;
            line-height: 1.6;
          }
          .greeting {
            font-size: 18px;
            font-weight: 700;
            color: #0b1d33;
            margin-bottom: 20px;
          }
          .intro-text {
            font-size: 15px;
            color: #555555;
            margin-bottom: 25px;
          }
          .details-box {
            background-color: #f7f9fc;
            border-left: 4px solid #F39C12;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 0 4px 4px 0;
          }
          .details-box h3 {
            margin-top: 0;
            margin-bottom: 15px;
            color: #0b1d33;
            font-size: 16px;
            font-weight: 700;
          }
          .details-box p {
            margin: 5px 0;
            font-size: 14px;
            color: #444444;
          }
          .footer {
            background-color: #f7f9fc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #eef2f6;
            font-size: 12px;
            color: #888888;
          }
          .footer a {
            color: #0072BB;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Quadrupletech</h1>
            <p>Engineering Services Ltd.</p>
          </div>
          <div class="content">
            <div class="greeting">Dear ${name},</div>
            <p class="intro-text">
              Thank you for applying for the position of <strong>${role}</strong> at <strong>Quadrupletech Engineering Services</strong>. We confirm that your application and CV have been safely received.
            </p>
            
            <div class="details-box">
              <h3>Submission Summary</h3>
              <p><strong>Applicant Name:</strong> ${name}</p>
              <p><strong>Position Applied:</strong> ${role}</p>
              <p><strong>Phone Number:</strong> ${phone || 'Not Provided'}</p>
            </div>

            <p class="intro-text">
              <strong>About Quadrupletech:</strong><br/>
              Quadrupletech Engineering Services is an industry-leading, engineering, procurement, construction (EPC), and HSE champion in Nigeria. We deliver safety-certified projects across key industrial infrastructure, steel structure fabrication, equipment logistics, and plant maintenance.
            </p>
            
            <p class="intro-text">
              Our recruitment team is currently reviewing submissions against the technical competencies required for this role. If your skills and background represent a matching fit, our HR Specialist will reach out to you directly to coordinate the preliminary screening.
            </p>
          </div>
          <div class="footer">
            <p><strong>Quadrupletech Engineering Services Ltd</strong></p>
            <p>5 Ayegbami Street, Idotun, Lagos Free Zone, Ibeju-Lekki, Lagos, Nigeria.</p>
            <p>
              <a href="mailto:techquadruple27@gmail.com">techquadruple27@gmail.com</a> | 
              <a href="${appUrl}">www.quadrupletech.com</a>
            </p>
            <p style="margin-top: 15px; font-size: 11px;">This is an automated reply. © 2026 Quadrupletech. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // HTML Alert Template to Admin (techquadruple27@gmail.com)
  const adminAlertHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Job Candidate Application Alert</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 20px;
          }
          .card {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
            padding: 30px;
          }
          .title {
            font-size: 20px;
            font-weight: 700;
            color: #0d2137;
            border-bottom: 2px solid #F39C12;
            padding-bottom: 15px;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .row {
            margin-bottom: 12px;
            font-size: 14px;
            display: flex;
          }
          .label {
            font-weight: bold;
            color: #555555;
            width: 150px;
            flex-shrink: 0;
          }
          .value {
            color: #111111;
          }
          .value a {
            color: #0072BB;
            text-decoration: underline;
          }
          .message-box {
            background-color: #f7f9fc;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.5;
            border-left: 4px solid #0072BB;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="title">New Applicant: Career Form Submitted</div>
          <div class="row"><span class="label">Candidate Name:</span> <span class="value">${name}</span></div>
          <div class="row"><span class="label">Email Address:</span> <span class="value">${email}</span></div>
          <div class="row"><span class="label">Phone:</span> <span class="value">${phone || 'Not Provided'}</span></div>
          <div class="row"><span class="label">Role Selection:</span> <span class="value"><strong>${role}</strong></span></div>
          <div class="row">
            <span class="label">CV Attachment URL:</span> 
            <span class="value"><a href="${cvUrl}" target="_blank">Click to open CV Document</a></span>
          </div>
          
          <div class="message-box">
            <strong>Candidate Cover Note / Overview:</strong><br/>
            <p style="white-space: pre-wrap; margin-top: 10px; margin-bottom: 0;">${coverNote || 'No description provided.'}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = getMailTransporter();

    if (transporter) {
      // 1. Send HTML Welcome / Auto-acknowledgment email to the candidate
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Quadrupletech HR Desk'}" <${fromEmail}>`,
        to: email,
        subject: `Job Application Received: ${role} - Quadrupletech Engineering`,
        html: applicantHtmlContent,
      });

      // 2. Dispatch Candidate Profile & details notification straight to techquadruple27@gmail.com
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Quadrupletech Recruitment'}" <${fromEmail}>`,
        to: 'techquadruple27@gmail.com',
        subject: `New Application: ${name} applied for ${role}`,
        html: adminAlertHtmlContent,
      });

      console.log(`✉️ Career application emails successfully dispatched via SMTP.`);
      return res.json({ success: true, mode: 'smtp', message: 'Application processed and email notification sent.' });
    } else {
      // Simulation mode
      console.log(
        '\n====================== ✉️  SMTP EMAIL SIMULATION MODE (WELCOME applicant) ======================' +
        `\nTo: ${email}` +
        `\nFrom: ${fromEmail}` +
        `\nSubject: Job Application Received: ${role} - Quadrupletech Engineering` +
        `\nCandidate Name: ${name}` +
        `\nApplied Role: ${role}` +
        `\n------------------------------------------------------------` +
        `\nReviewing against technical competencies...` +
        '\n========================================================================\n' +
        '\n====================== ✉️  SMTP EMAIL SIMULATION MODE (FORWARD TO ADMIN) ======================' +
        `\nTo: techquadruple27@gmail.com` +
        `\nFrom: ${fromEmail}` +
        `\nSubject: New Application: ${name} applied for ${role}` +
        `\nDetails:` +
        `\n- Candidate: ${name}` +
        `\n- Email: ${email}` +
        `\n- Phone: ${phone || 'N/A'}` +
        `\n- Role Requested: ${role}` +
        `\n- CV URL Reference: ${cvUrl}` +
        `\n- Cover Note: ${coverNote || 'N/A'}` +
        '\n========================================================================\n'
      );
      return res.json({
        success: true,
        mode: 'simulation',
        message: 'Application processed and simulated to techquadruple27@gmail.com.'
      });
    }
  } catch (error) {
    console.error('Failed to dispatch application emails:', error);
    return res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Configure Vite or Static Assets handling
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Fullstack server booted on http://0.0.0.0:${PORT}`);
  });
}

start();
