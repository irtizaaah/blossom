export class Blossom {
  constructor() {
    if (!Blossom.instance) {
      this.document = document;
      this.build = () => {};
      Blossom.instance = this;
    }

    return Blossom.instance;
  }

  setBuild(build) {
    this.build = build;
  }

  update() {
    document.body.innerHTML = "";
    document.body.appendChild(this.build());
  }

  render(build) {
    this.setBuild(build);
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