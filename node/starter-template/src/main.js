import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  log(req.path);

  if(req.path === '/title') {
  const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return res.send(`<p>Now is <b>${date}</b>. <p>`);
}

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  </head>
  <body>
    <button hx-swap="beforestart" hx-target="#list" hx-get="/title">
      Click Me
    </button>
    <div id="list">

    </div>
  </body>
  </html>`;

  return res.send(html, 200, {
    'content-type': 'text/html'
  });
};
