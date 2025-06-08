import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// home route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": 'Full MERN Stack - Docker API (TypeScript) is live 🎯'
  })
});

// health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    "message": 'Full MERN Stack - Docker API (TypeScript) is healthy 🎯'
  })
});

// hello world route
app.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({
    "message": 'Hello World! 🎉'
  })
});

// hi route
app.get('/hi', (req: Request, res: Response) => {
  res.status(200).json({
    "message": 'Hi there! 👋 updated'
  })
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});