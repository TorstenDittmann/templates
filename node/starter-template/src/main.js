import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  log(req.url);

  if(req.url === '/title') {
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
    <button hx-post="http://64bbba3ea0c5e12284e8.functions.localhost/title" hx-swap="outerHTML">
      Click Me
    </button>
  </body>
  </html>`;

  return res.send(html, 200, {
    'content-type': 'text/html'
  });
};
