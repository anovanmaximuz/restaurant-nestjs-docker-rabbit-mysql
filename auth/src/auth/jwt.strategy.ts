import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConfig } from './jwt.config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt-user') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtConfig.user_secret
    });
  }

  async validate(payload: any) {
    return {
      user_id: payload.sub,
      email: payload.email,
      expired: payload.exp
    };
  }
}