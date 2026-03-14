const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to your specific URL
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Let's get the bounding box of the PanelHeader inside #about
  const result = await page.evaluate(() => {
    const header = document.querySelector('#about > header');
    if (!header) return 'not found';

    const style = window.getComputedStyle(header, '::after');
    return {
      width: style.width,
      left: style.left,
      content: style.content,
      background: style.backgroundColor,
      position: style.position,
      zIndex: style.zIndex,
    };
  });
  
  console.log("Pseudo computed:", result);

  const rects = await page.evaluate(() => {
    const parentNode = document.querySelector('#about');
    const header = document.querySelector('#about > header');
    return {
      panelRect: parentNode.getBoundingClientRect(),
      headerRect: header.getBoundingClientRect()
    }
  });
  console.log("Rects:", rects);

  await browser.close();
})();
