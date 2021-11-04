import { newE2EPage } from '@stencil/core/testing';

describe('jack-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jack-button></jack-button>');

    const element = await page.find('jack-button');
    expect(element).toHaveClass('hydrated');
  });
});
