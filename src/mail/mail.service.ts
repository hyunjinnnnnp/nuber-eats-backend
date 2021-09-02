import got from 'got';
import * as FormData from 'form-data';
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constans';
import { MailModuleOptions } from './mail.interfaces';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {
    this.sendEmail('testing', 'test')
      .then(() => {})
      .catch((error) => console.log(error.response.body));
  }

  private async sendEmail(subject: string, content: string) {
    const form = new FormData();
    form.append('from', `Excited User <mailgun@${this.options.domain}>`);
    form.append('to', `imhjinnnnn@gmail.com`);
    form.append('subject', subject);
    // form.append('text', content);
    form.append('template', 'nuber-eats-confirm-account');
    form.append('v:code', 'sdfd'); //sending variables
    form.append('v:username', 'nico');
    const response = await got(
      `https://api.mailgun.net/v3/${this.options.domain}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`, //base64 encoding
        },
        body: form,
      },
    );
    console.log(response.body);
  }
}
