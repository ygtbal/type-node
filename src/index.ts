import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import {port} from './config';
import countRoutes from './routes/counts.routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: `Health check ok with port ${port}`});
});

app.use('/counts', countRoutes);


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;