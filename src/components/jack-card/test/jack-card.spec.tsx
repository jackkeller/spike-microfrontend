import { newSpecPage } from '@stencil/core/testing';
import { JackCard } from '../jack-card';

describe('jack-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JackCard],
      html: `<jack-card></jack-card>`,
    });
    expect(page.root).toEqualHtml(`
      <jack-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jack-card>
    `);
  });
});
