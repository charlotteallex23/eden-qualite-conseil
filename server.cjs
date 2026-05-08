const express = require('express');
const cors = require('cors');
const emailjs = require('@emailjs/nodejs');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration
const RECAPTCHA_SECRET_KEY = '6LeSAOAsAAAAAPbdoBR_sWLpTiuFWH0BgSnuYpWc';
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

const EMAILJS_PUBLIC_KEY = 'w0GiVe8V5k_sHZYwU';
const EMAILJS_SERVICE_ID = 'service_3o7wsxl';
const EMAILJS_TEMPLATE_ID = 'template_31vea09';

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

// Endpoint pour vérifier reCAPTCHA et envoyer email
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { token, nom, prenom, email, telephone, besoin, message } = req.body;

    // 1. Vérifier le token reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    console.log(`reCAPTCHA Score: ${recaptchaData.score}, Success: ${recaptchaData.success}`);

    // 2. Rejeter si score est trop bas (bot probable)
    if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_SCORE_THRESHOLD) {
      console.warn(`Bot détecté - Score: ${recaptchaData.score}`);
      return res.status(400).json({
        success: false,
        message: 'Vérification échouée. Vous semblez être un bot.',
      });
    }

    // 3. Envoyer l'email si c'est un humain
    const templateParams = {
      from_name: `${prenom} ${nom}`,
      nom: nom,
      prenom: prenom,
      from_email: email,
      telephone: telephone,
      besoin: besoin,
      message: message,
      reply_to: email,
      recaptcha_token: token,
      recaptcha_score: recaptchaData.score,
    };

    const emailResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email envoyé:', emailResponse.status);

    return res.json({
      success: true,
      message: 'Email envoyé avec succès ✓',
      score: recaptchaData.score,
    });
  } catch (error) {
    console.error('Erreur serveur:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur. Veuillez réessayer.',
      error: error.message,
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Serveur Eden Conseil Qualité running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: POST http://localhost:${PORT}/api/send-contact-email`);
});
