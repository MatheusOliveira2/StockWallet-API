import { getRepository } from 'typeorm';
import Stock from '../../models/Stock';

interface Request {
  code: string;
  name: string;
}

class CreateStockService {
  public async execute({ code, name }: Request): Promise<Stock> {
    const stockRepository = getRepository(Stock);

    const checkStockExists = await stockRepository.findOne({
      where: { code },
    });

    if (checkStockExists) {
      throw new Error('Stock address already exists.');
    }

    const stock = stockRepository.create({
      code,
      name,
    });

    await stockRepository.save(stock);

    return stock;
  }
}

export default CreateStockService;
