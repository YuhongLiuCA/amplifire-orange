import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
	@track
	itemList = ["Test1", "Test2"];

	@track
	items = [
		{name: "65%Keeb"}
	]

	addItem() {
		let images = this.template.querySelector("img");
		let imgName = images.value;

		for(let image of images) {
			image.addEventListener("click", this.itemList.push(imgName));
		}
	}
}
