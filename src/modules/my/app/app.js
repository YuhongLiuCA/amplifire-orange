import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {

	@api
	compName = "keeb.";

	home = true;
	product = false;
	about = false;

	pageName = "Home"

	homePage() {
		this.home = true;
		this.product = false;
		this.about = false;

		this.pageName = "Home";
	}

	prodPage() {
		this.home = false;
		this.product = true;
		this.about = false;

		this.pageName = "Product";
	}

	aboutPage() {
		this.home = false;
		this.product = false;
		this.about = true;

		this.pageName = "About Us";
	}
}
