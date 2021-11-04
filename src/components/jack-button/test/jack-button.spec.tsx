import { newSpecPage } from '@stencil/core/testing';
import { JackButton } from '../jack-button';

describe('jack-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JackButton],
      html: `<jack-button></jack-button>`,
    });
    expect(page.root).toEqualHtml(`
      <jack-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jack-button>
    `);
  });
});
