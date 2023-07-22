export default async ({ req, res }) => {
  if(req.path === '/title') {
  const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return res.send(`<p>Current Time: <b>${date}</b>. <p>`);
}

  const html = `
<!DOCTYPE html>
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
</html>
  `;

  return res.send(html, 200, {
    'content-type': 'text/html'
  });
};
