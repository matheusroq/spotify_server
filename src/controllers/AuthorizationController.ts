import { Request, Response } from 'express';
import { AuthorizationService } from '../services/AuthorizationService';

class AuthorizationController {
  async login(request: Request, response: Response) {
    const scope = [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-library-read',
      'user-library-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
    ].reduce((ac, scope, index) => {
      if (index === 0) return `${scope}${ac}`;
      return `${ac}%20${scope}`;
    }, '');

    const url = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=${scope}`;
    return response.redirect(url);
  }
  async getAccess(request: Request, response: Response) {
    const { code } = request.body;
    const authorizationService = new AuthorizationService();
    const { access_token, scope, expires_in, refresh_token } =
      await authorizationService.auth(code);
    return response.json({ access_token, scope, expires_in, refresh_token });
  }
}

export { AuthorizationController };
