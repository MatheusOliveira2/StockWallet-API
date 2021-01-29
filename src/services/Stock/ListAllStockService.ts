import { getRepository } from 'typeorm';
import Stock from '../../models/Stock';

class ListAllStockService {
  public async execute(): Promise<Stock[]> {
    const stockRepository = getRepository(Stock);

    const stock = stockRepository.find();

    return stock;
  }
}

export default ListAllStockService;
