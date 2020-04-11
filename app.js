const http = require('http');

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
                    <button>Submit</button>button>
                </form>
            </body>
        </html>
        `);

        return res.end();
    }

    if (url === '/message' && method === 'POST') {}

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
