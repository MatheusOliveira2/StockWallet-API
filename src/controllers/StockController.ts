import { Request, Response } from 'express';

import CreateStockService from '../services/Stock/CreateStockService';
import ListAllStockService from '../services/Stock/ListAllStockService';

export default class StockController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      let { code, name } = req.body;

      const createStock = new CreateStockService();

      const stock = await createStock.execute({
        name,
        code,
      });

      return res.json(stock);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    const listAllService = new ListAllStockService();

    const stocks = await listAllService.execute();

    return res.status(200).json(stocks);
  }
}
