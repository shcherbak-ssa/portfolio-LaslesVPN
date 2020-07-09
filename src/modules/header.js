'use strict';

/** imports */
import $ from './tools';

/** header class */
class Header {
  constructor() {
    this._header = $('#header');
    this._burgerButton = this._header.$('.header--burger-button');
    this._signButtons = this._header.$('.header--sing-buttons');
    this._menuBgComponent = $.clone('menu-bg');
    this._subscribeComponent = $.clone('subscribe');
  }

  /** public methods */
  init() {
    this._burgerButton.on('click', this._burgerButtonClickHandler.bind(this));
  }

  /** private methods */
  _burgerButtonClickHandler({clientX: left, clientY: top}) {
    this._header.toggle('.is-menu-open');

    if( this._header.contains('.is-menu-open') ) {
      $.body.block();
      
      this._menuBgComponent.styles({
        top: top + 'px',
        left: left + 'px'
      });
      this._header.append(this._menuBgComponent);

      if( this._isWindowWithTabletWidth() ) {
        this._signButtons.prepend(this._subscribeComponent);
      }
    } else {
      this._header.add('.is-menu-close');
      $.body.unblock();

      setTimeout(() => {
        this._header.$('.menu-bg').remove()
        this._header.remove('.is-menu-close');

        if( this._isWindowWithTabletWidth() ) {
          this._signButtons.$('.subscribe').remove();
        }
      }, 400)
    }
  }
  _isWindowWithTabletWidth() {
    return document.documentElement.clientWidth >= 768;
  }
}

/** export */
export default Header;