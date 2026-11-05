import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface HostelEnquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  roomType: string;
  preferredDate?: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

const enquiriesStore: HostelEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for submitting room enquiries
  app.post('/api/enquire', (req, res) => {
    try {
      const { fullName, phone, email, roomType, preferredDate, message } = req.body;

      // Validation
      if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
        return res.status(400).json({
          success: false,
          error: 'Full Name is required.'
        });
      }

      const digits = (phone || '').toString().replace(/\D/g, '');
      if (!digits || digits.length < 10) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid 10-digit mobile number.'
        });
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.'
        });
      }

      const id = 'ISH-' + Date.now().toString().slice(-6) + '-' + Math.floor(100 + Math.random() * 900);
      const enquiry: HostelEnquiry = {
        id,
        fullName: fullName.trim(),
        phone: digits,
        email: email ? email.trim() : undefined,
        roomType: roomType || 'Single Room',
        preferredDate: preferredDate || undefined,
        message: message ? message.trim() : undefined,
        createdAt: new Date().toISOString(),
        status: 'new'
      };

      enquiriesStore.unshift(enquiry);
      console.log(`[ISHANVI BACKEND] New enquiry received: #${id} from ${enquiry.fullName} (${enquiry.phone}) for ${enquiry.roomType}`);

      return res.status(201).json({
        success: true,
        enquiryId: id,
        message: 'Your enquiry has been successfully logged with the Ishanvi Hostel desk.',
        enquiry
      });
    } catch (err: any) {
      console.error('[ISHANVI BACKEND ERROR]', err);
      return res.status(500).json({
        success: false,
        error: 'An internal error occurred while processing your enquiry. Please try calling directly at +91 77670 58988.'
      });
    }
  });

  // API endpoint to retrieve enquiries
  app.get('/api/enquiries', (req, res) => {
    res.json({
      success: true,
      total: enquiriesStore.length,
      enquiries: enquiriesStore
    });
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'operational',
      property: 'Ishanvi Hostel & Accommodation, Pune',
      uptime: process.uptime()
    });
  });

  // Mount Vite SPA middlewares in development mode
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Ishanvi Applet Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
