const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.write(`
        <html>
            <head>
                <title>Enter message</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message"/>
                    <button>Submit</button>
                </form>
            </body>
        </html>
        `);

        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                <h1>Hello from my Node.js Server!</h1>
            </body>
        </html>
    `);

    res.end();
});

server.listen(3000);
