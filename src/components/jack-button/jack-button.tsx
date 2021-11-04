import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jack-button',
  styleUrl: 'jack-button.scss',
  shadow: true,
})
export class JackButton {
  /**
   * Button Style
   */
  @Prop() appearance: string;
  /**
   * Is it a link?
   */
  @Prop() link: string;
  /**
   * Is the link external?
   */
  @Prop() outside: boolean;

  render() {
    return (
      <Host>
        {this.link ? (
          <a href={this.link} class={this.appearance ?? 'default'} target={this.outside ? '_outside' : ''}>
            <slot></slot>
          </a>
        ) : (
          <button class={this.appearance ?? 'default'}>
            <slot></slot>
          </button>
        )}
      </Host>
    );
  }
}
