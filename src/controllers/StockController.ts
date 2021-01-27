import { Request, Response } from 'express';

import CreateStockService from '../services/Stock/CreateStockService';

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
}
