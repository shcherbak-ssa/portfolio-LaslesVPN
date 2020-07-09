'use strict';

/** imports */
import $ from '../tools';
import actions from './actions';
import events from './events';
import clone from './clone';
import children from './children';
import insert from './insert';
import styles from './styles';

/** element class */
class Element {
  constructor(element) {
    this._el = element;
    this._classes = this._el.classList;
  }

  /** static methods */
  static create(element) {
    return new Element(element);
  }

  /** public methods */
  $(selector, all = false) {
    return all ? $.query.allElements(selector, this._el) : $.query.firstElement(selector, this._el);
  }
  getElement() {
    return this._el;
  }
}

/** inheritance */
const elementPrototype = Element.prototype;
const inheritance = (object) => Object.assign(elementPrototype, object);

inheritance(actions);
inheritance(events);
inheritance(clone);
inheritance(children);
inheritance(insert);
inheritance(styles);

/** export */
export default Element;