const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 3836, height: 2200 });
  await page.goto('https://nextjs.org/');
  await page.screenshot({ path: './screenshot/5.png' });

  await browser.close();
})()
