import express from 'express';
import compression from 'compression';
import cors from 'cors';
import http from 'http';

const app = express();

app.use(cors());
app.use(compression());

app.get('*', (req, res, next) => {
    const html = `
        <html>
            <head><title>My First SSR</title></head>
            <body>
                <h1>asdasdasdasdasds</h1>
                <div id="root"></div>
            </body>
        </html>
    `;

    res.send(html);
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => console.log('Server is listening'));