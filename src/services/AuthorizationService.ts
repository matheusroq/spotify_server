import axios from 'axios';
import { Buffer } from 'buffer';

interface AuthResponse {
  access_token: string;
  scope: string;
  expires_in: string;
  refresh_token: string;
}

class AuthorizationService {
  async auth(code: string): Promise<AuthResponse> {
    const url = `https://accounts.spotify.com/api/token`;
    return axios
      .post<AuthResponse>(url, null, {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: 'http://localhost:3000',
        },
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET,
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }
}

export { AuthorizationService };
