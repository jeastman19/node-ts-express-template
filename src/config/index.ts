import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

export interface Config {
    port: number;
    databaseUrl: string;
    apiKey: string;
    jwtSecret: string;
}

const config: Config = {
    port: Number(process.env.PORT || 3000),
    databaseUrl: process.env.DATABASE_URL || '',
    apiKey: process.env.API_KEY || '',
    jwtSecret: process.env.JWT_SECRET || '',
};

if (process.env.NODE_ENV === 'test') {
    const testConfig = dotenv.parse(
        fs.readFileSync(path.join(__dirname, '..', '.env.test'))
    );
    Object.assign(config, testConfig);
}

export default config;
