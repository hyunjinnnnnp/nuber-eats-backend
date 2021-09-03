import got from 'got';
import * as FormData from 'form-data';
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { EmailVars, MailModuleOptions } from './mail.interfaces';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {}

  private async sendEmail(
    subject: string,
    // to: string,
    template: string,
    emailVars: EmailVars[],
  ) {
    const form = new FormData();
    form.append('from', `HJ from NuberEats <mailgun@${this.options.domain}>`);
    form.append('to', `imhjinnnnn@gmail.com`);
    form.append('subject', subject);
    // form.append('text', content);
    form.append('template', template);
    // form.append('v:code', 'sdfd'); //sending variables
    // form.append('v:username', 'nico');
    emailVars.forEach((eVar) => form.append(`v:${eVar.key}`, eVar.value));
    try {
      await got(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`, //base64 encoding
        },
        body: form,
      });
    } catch (error) {
      console.log(error);
    }
  }

  sendVerificationEmail(email: string, code: string) {
    this.sendEmail('Verify Your Email', 'nuber-eats-confirm-account', [
      { key: 'code', value: code },
      { key: 'username', value: email },
    ]);
  }
}
