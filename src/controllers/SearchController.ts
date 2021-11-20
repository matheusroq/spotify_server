import { Request, Response } from 'express';
import { SearchService } from '../services/SearchService';

class SearchController {
  async getSearch(request: Request, response: Response) {
    const searchService = new SearchService();
    const { accessToken, searchTerm } = request.query;
    try {
      let results;
      if (typeof accessToken === 'string' && typeof searchTerm === 'string') {
        results = await searchService.search(accessToken, searchTerm);
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
