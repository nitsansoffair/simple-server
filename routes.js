const fs = require('fs');

const requestHandler = (req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.write(`
        <html>
            <head>
                <title>Assignment</title>
            </head>
            <body>
                <h1>Some Greeting Text!</h1>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>                
                    <li>User 3</li>                
                    <li>User 4</li>                
                    <li>User 5</li>                                
                </ul>
                <form action="/create-user" method="POST">
                    <input name="username" type="text"/>
                    <button>Submit</button>                    
                </form>
            </body>
        </html>
        `);

        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            fs.writeFile('username.txt', username, (err) => {
                console.log(username);

                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
};

module.exports = requestHandler;
