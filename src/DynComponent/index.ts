import BaseComponent from "./BaseComponent";
class WebComponent extends BaseComponent {
	constructor() {
		super();

		let container = document.createElement("div");
		container.classList.add("dyn-component--web-components", "dyn-device-mockups", "device-wrapper");
		container.innerHTML = `<div class="device" data-device="${this.device}" data-orientation="${this.orientation}" data-color="${this.color}">
    <div class="screen">
      <slot></slot>
    </div>
    <div class="button">
      <slot name="button"></slot>
    </div>
  </div>`;
		this.shadowRoot!.appendChild(container);
	}

	attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
		super.attributeChangedCallback(name, _oldValue, newValue);

		switch (name) {
			case "device": {
				if (newValue) {
					this.device = newValue!;
					this.updateDevice();
				}
				break
			}
			case "orientation": {
				if (newValue) {
					this.orientation = newValue!;
					this.updateDevice();
				}
				break;
			}
			case "color": {
				if (newValue) {
					this.color = newValue!;
					this.updateDevice();
				}
				break;
			}
			case "mockupsCssUrl": {
				if (newValue) {
					this.mockupsCssUrl = newValue!;
					this.injectStyles();
				}
				break
			}
		}
	}


	connectedCallback() {
		super.connectedCallback();
		this.updateDevice();
	}

	private updateDevice() {
		const deviceDom = this.shadowRoot!.querySelector('.device') as HTMLElement | null;
		const screenDom = this.shadowRoot!.querySelector('.screen') as HTMLElement | null;
		if (deviceDom) {
			deviceDom.setAttribute("data-device", this.device);
			deviceDom.setAttribute("data-orientation", this.orientation);
			deviceDom.setAttribute("data-color", this.color);
		}
		if (screenDom) {
			screenDom.style.backgroundColor = getComputedStyle(this).backgroundColor
		}
	}

	protected injectStyles() {
		super.injectStyles();

		this.shadowRoot?.querySelectorAll("link").forEach(link => link.remove());
		const deviceMockupsLinkElement = document.createElement('link');
		deviceMockupsLinkElement.rel = 'stylesheet';
		deviceMockupsLinkElement.classList.add('device-mockups-css');
		deviceMockupsLinkElement.href = this.mockupsCssUrl;
		this.shadowRoot!.appendChild(deviceMockupsLinkElement);
	}
}

const define = (name: string, options?: ElementDefinitionOptions) => {
	customElements.define(name, WebComponent, options);
};

export { define };
export default WebComponent;
