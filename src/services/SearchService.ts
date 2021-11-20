import axios from 'axios';
import { SearchResponse } from '../types/search';

class SearchService {
  async search(
    accessToken: string,
    searchTerm: string,
  ): Promise<SearchResponse> {
    const url = `https://api.spotify.com/v1/search?type=album,track&include_external=audio&q=name:${searchTerm}`;

    return axios
      .get<SearchResponse>(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return {
          album: response.data.albums,
          track: response.data.tracks,
        };
      })
      .catch((err) => err);
  }
}
export { SearchService };
