const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080});
  await page.goto('http://localhost:3000');
  await page.screenshot({path: './screenshots/1.jpg'});

  await browser.close();
})();
