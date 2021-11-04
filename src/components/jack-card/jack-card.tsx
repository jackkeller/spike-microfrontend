import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jack-card',
  styleUrl: 'jack-card.scss',
  shadow: true,
})
export class JackCard {
  /**
   * Card title
   */
  @Prop() heading: string;
  /**
   * Card content
   */
     @Prop() content: string;

  render() {
    return (
      <Host>
        <div class="card">
          <h3>{this.heading}</h3>
          <p>{this.content}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
