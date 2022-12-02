import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cool-component',
  styleUrl: 'cool-component.css',
  shadow: true,
})
export class CoolComponent {
  /**
   * The first name
   */
  @Prop() buttonText: string = 'click me';
  @Prop({ reflect: true }) colorButton: 'primary' | 'secondary' = 'primary';

  render() {
    return <button class={this.colorButton}>{this.buttonText}</button>;
  }
}
