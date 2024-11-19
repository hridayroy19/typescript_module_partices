import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.router';
const app: Application = express();

//persar
app.use(express.json());
app.use(cors());

//application route

app.use('/api/v1/student', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
