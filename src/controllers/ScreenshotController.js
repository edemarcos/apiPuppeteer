import puppeteer from 'puppeteer';
import path from 'path';

class ScreenshotController {
  async index(req, res) {
    try {
      const { url } = req.query;

      const browser = await puppeteer.launch({
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
      });
      const page = await browser.newPage();
      await page.goto(url);
      const filePath = path.join(__dirname, '..', '..', 'public', 'prints', '/');
      await page.screenshot({
        path: `${filePath}arquivo.png`,
        fullPage: true,
        omitBackground: true,
      });
      await browser.close();

      // res.download(`${filePath}arquivo.png`);

      // return res.status(200).download(`${filePath}arquivo.png`, () => { });

      const file = `${filePath}arquivo.png`;

      return res.sendFile(file, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ success: false, message: 'internal server error. please try again later' });
        }
        return console.log('Sent:', file, 'at', new Date().toString());
      });
    } catch (error) {
      return res.status(200).json('ocoreu um erro');
    }
  }
}

export default new ScreenshotController();
