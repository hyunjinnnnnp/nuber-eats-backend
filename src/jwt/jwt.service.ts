import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from '../common/common.constants';
import { JwtModuleOptions } from './jwt.interfaces';

@Injectable()
export class JwtService {
  //module --> service INJECTION
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions, // private readonly config: ConfigService, << 이걸로 충분하긴함 ㅋㅋ
  ) {}
  //config
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }
  verify(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
