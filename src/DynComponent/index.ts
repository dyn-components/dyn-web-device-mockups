import BaseComponent from "./BaseComponent";
class WebComponent extends BaseComponent {
	device: string = "iPhone6Plus";
	orientation: string = "portrait";
	color: string = "white";
	static get observedAttributes(): string[] {
		return ["device", "orientation", "color"];
	}
	constructor() {
		super();

		let container = document.createElement("div");
		container.classList.add("dyn-component--web-components", "dyn-device-mockups", "device-wrapper");
		container.innerHTML = `<div class="device" data-device="${this.device}" data-orientation="portrait" data-color="black">
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
}

const define = (name: string, options?: ElementDefinitionOptions) => {
	customElements.define(name, WebComponent, options);
};

export { define };
export default WebComponent;
