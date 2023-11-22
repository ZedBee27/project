// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Use CORS middleware
app.use(cors());


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// New API endpoint
app.get('/awesome/applicant', (req: Request, res: Response) => {
  const myInfo = {
    name: 'Zubia',
    role: 'Student',
    funFact: 'I love coding',
  };

  res.json(myInfo);
});

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
