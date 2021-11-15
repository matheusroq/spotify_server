import { Request, Response } from 'express';
import { AuthorizationService } from '../services/AuthorizationService';

class AuthorizationController {
  async getAccess(request: Request, response: Response) {
    const { code } = request.body;
    const authorizationService = new AuthorizationService();
    const { access_token, scope, expires_in, refresh_token } =
      await authorizationService.auth(code);
    return response.json({ access_token, scope, expires_in, refresh_token });
  }
}

export { AuthorizationController };
