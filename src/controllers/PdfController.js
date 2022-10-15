import puppeteer from 'puppeteer';
import path from 'path';

class PdfController {
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

      await page.goto(url, {
        waitUntil: 'networkidle0',
      });

      const filePath = path.join(__dirname, '..', '..', 'public', 'pdf', '/');
      const pdf = await page.pdf({
        path: `${filePath}arquivo.pdf`,
        format: 'a4',
        printBackground: true,
      });
      await browser.close();

      res.contentType('application/pdf');

      return res.status(200).send(pdf);
    } catch (error) {
      return res.status(200).json('ocoreu um erro');
    }
  }
}

export default new PdfController();
