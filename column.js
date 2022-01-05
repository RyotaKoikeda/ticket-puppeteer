const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    "ignoreHTTPSErrors" : true,
    "slowMo" : 200,

    args: [
      '--window-size=1600,950',
      '--window-position=100,50',
      '--no-sandbox'
    ]
  });
  async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }
  const page = await browser.newPage();
  await page.goto('https://reserve.tokyodisneyresort.jp/ticket/search/?outside=1&route=2&parkTicketGroupCd=020&useDateFrom=20211217');
  const pageClicked= await page.evaluate(()=> {
    return !!document.querySelector('.heading-page-title')
  })
  $i = 0;
  while($i <= 10){
    if (!pageClicked) {
      await page.goto('https://reserve.tokyodisneyresort.jp/ticket/search/?outside=1&route=2&parkTicketGroupCd=020&useDateFrom=20211217');
      await sleep(1000);
    } else {
      break;
    }
  }
})();