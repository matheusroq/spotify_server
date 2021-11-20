import { Request, Response } from 'express';
import { SearchService } from '../services/SearchService';

class SearchController {
  async getSearch(request: Request, response: Response) {
    const searchService = new SearchService();
    const { accessToken } = request.query;
    try {
      let results;
      if (typeof accessToken === 'string') {
        results = await searchService.search(accessToken);
      } else {
        throw new Error('Access token must be a string');
      }
      return response.json(results);
    } catch (e) {
      return e;
    }
  }
}

export { SearchController };
