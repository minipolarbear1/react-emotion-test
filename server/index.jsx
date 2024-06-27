import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import App from '../client/App.jsx'; // Assuming App is a React component

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf-8');

app.get('/', (req, res) => {
    const renderString = ReactDOMServer.renderToString(<App />);

    // Enhance security by escaping user-generated content (UGC)
    // This is a basic example, consider using a library like DOMPurify or a more comprehensive security approach
    const sanitizedRenderString = renderString.replace(/<script[^>]*>.*?<\/script>/gi, '');

    const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${sanitizedRenderString}</div>`);
    res.send(finalHtml);
});

app.use('/', express.static(path.join(__dirname, 'dist/client')));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
