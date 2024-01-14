export class Blossom {
  constructor() {
    if (!Blossom.instance) {
      this.document = document;
      this.components = () => {};
      Blossom.instance = this;
    }

    return Blossom.instance;
  }

  build(components) {
    this.components = components;
  }

  update() {
    document.body.innerHTML = "";
    document.body.appendChild(this.build());
  }

  render(build) {
    this.build(build);
    this.update();
  }
}

export class State {
  constructor(data = {}) {
    this.data = data;
    this.dependencies = new Set();
    this.blossom = Blossom.instance; // Use the singleton instance of Blossom
  }

  setState(data) {
    this.data = data;
    this.blossom.update();
  }

  getState() {
    return this.data;
  }
}