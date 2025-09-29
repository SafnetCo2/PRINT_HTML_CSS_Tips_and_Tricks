// convert.js - Local HTML to PDF using Puppeteer
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const htmlPath = path.join(__dirname, 'index.html');
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

        await page.pdf({
            path: path.join(__dirname, 'PRINT_HTML_CSS_Tips_and_Tricks.pdf'),
            format: 'A4',
            printBackground: true,
            margin: { top: '1in', bottom: '1in', left: '1in', right: '1in' }
        });

        console.log('✅ PDF generated successfully!');
        await browser.close();
    } catch (err) {
        console.error('❌ Error generating PDF:', err);
    }
})();
