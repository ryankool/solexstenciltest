import { newSpecPage } from '@stencil/core/testing';
import { CoolComponent } from './cool-component';

describe('cool-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CoolComponent],
      html: '<cool-component></cool-component>',
    });
    expect(root).toEqualHtml(`
      <cool-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </cool-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CoolComponent],
      html: `<cool-component first="Stencil" last="'Don't call me a framework' JS"></cool-component>`,
    });
    expect(root).toEqualHtml(`
      <cool-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </cool-component>
    `);
  });
});
