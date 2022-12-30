import cors from 'cors';
import express from 'express';
import ratelimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

import { router } from './routes';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(
    ratelimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);

app.use(express.json());
app.use(router);

let i: number = 5;

export { app };
