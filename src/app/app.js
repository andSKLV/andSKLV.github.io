class App {
	constructor ({el}) {
		this.el = el;
		this.sender = 'Michael';
		this.chat = new Chat ({el: document.createElement('div'),});
		this.form = new Form ({
			el: document.createElement('div'),
			onSubmit: ()=>this.formSubmit(),});
		this.el.append(this.chat.el, this.form.el);
		this.render();
	}

	render () {
		this.chat.render();
		this.form.render();
	}

	formSubmit(text) {
		this.chat.messages = [
			...this.chat.messages,
			{text, 
			sender: this.sender
			},
		];
		this.render();
	}
}