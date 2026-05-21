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
  const { name, email, projectType } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  // Set default from email
  const fromEmail = process.env.SMTP_FROM || 'no-reply@quadrupletech.com';
  const appUrl = process.env.APP_URL || 'https://quadrupletech.com';

  // Beautifully designed HTML template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Quadrupletech Engineering Brochure &amp; Introduction</title>
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
              Thank you for reaching out to <strong>Quadrupletech Engineering Services</strong>! We have successfully registered your interest regarding <strong>${projectType}</strong>. It is a absolute privilege to connect with you.
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
              <a href="mailto:Quadrupletech036@gmail.com">Quadrupletech036@gmail.com</a> | 
              <a href="${appUrl}">www.quadrupletech.com</a>
            </p>
            <p style="margin-top: 15px; font-size: 11px;">This is an automated reply. © 2026 Quadrupletech. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = getMailTransporter();

    if (transporter) {
      // Send the real email
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Quadrupletech Engineering'}" <${fromEmail}>`,
        to: email,
        subject: 'Quadrupletech Engineering Services - Brochure & Capabilities Profile',
        html: htmlContent,
      });

      console.log(`✉️ Email successfully dispatched via SMTP to ${email}`);
      return res.json({ success: true, mode: 'smtp', message: 'Brochure successfully sent via email.' });
    } else {
      // Simulation mode
      console.log(
        '\n====================== ✉️  SMTP EMAIL SIMULATION MODE ======================' +
        `\nTo: ${email}` +
        `\nFrom: ${fromEmail}` +
        `\nSubject: Quadrupletech Engineering Services Ltd - Brochure & Capabilities` +
        `\nRecipient Name: ${name}` +
        `\nCore Project Selection: ${projectType}` +
        '\n------------------------------------------------------------' +
        '\n[Melted Email Content snippet]' +
        '\n"Quadrupletech Engineering Services Ltd is an industry-leading, multidisciplined' +
        '\nEPCC and Safety services partner in Nigeria..."' +
        `\nBrochure download link: ${appUrl}/brochure.pdf` +
        '\n========================================================================\n'
      );
      return res.json({ 
        success: true, 
        mode: 'simulation', 
        message: 'Brochure successfully sent via email (simulation mode). Configure SMTP variables to send live.' 
      });
    }
  } catch (error) {
    console.error('Failed to dispatch email:', error);
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
