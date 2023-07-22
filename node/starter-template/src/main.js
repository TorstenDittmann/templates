import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return res.send(`<p>Now is <b>${date}</b>. <p>`);
};
