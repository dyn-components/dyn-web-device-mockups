import styles from './styles/index.scss?inline'
class BaseComponent extends HTMLElement {
  device: string = "iPhone6Plus";
  orientation: string = "portrait";
  color: string = "white";
  mockupsCssUrl: string = "https://cdn.jsdelivr.net/npm/html5-device-mockups@3.2.1/dist/device-mockups.min.css";
  
  static getBooleanValue(value: any) {
    return !!value && value !== "false";

  }
  static get observedAttributes(): string[] {
    return ["device", "orientation", "color", "mockupsCssUrl"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.injectStyles();
  }
  render() {
    this.shadowRoot!.innerHTML = ``;
  }

  attributeChangedCallback(_name: string, _oldValue: string | null, _newValue: string | null) { }

  connectedCallback() { }

  disconnectedCallback() { }

  set<K extends keyof this>(key: K, value: this[K]) {
    this[key] = value;
  }

  get<K extends keyof this>(key: K) {
    return this[key];
  }

  protected injectStyles() {
    this.shadowRoot?.querySelectorAll("style").forEach(style => style.remove());

    const style = document.createElement("style");
    style.textContent = `${styles}`;
    this.shadowRoot?.appendChild(style);
  }
}

export default BaseComponent;
