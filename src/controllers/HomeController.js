class HomeController {
  async index(req, res) {
    try {
      res.status(200).json('Index');
    } catch (error) {
      res.status(200).json('ocoreu um erro');
    }
  }
}

export default new HomeController();
