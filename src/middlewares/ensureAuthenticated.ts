import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação jwt
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  // Bearer sdafsdafasd
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // sub é o ID do usuário que gerou o token
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}
