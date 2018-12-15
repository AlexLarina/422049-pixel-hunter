class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`This is abstract class! No instance permitted!`);
    }
  }

  get template() {
    return this._template;
  }

  render() {
    this._container = document.createElement(`section`);
    this._container.innerHTML = this.template.trim();

    return this._container;
  }

  bind() {
    // bind handlers if required
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind();
    return this._element;
  }
}

export default AbstractView;
