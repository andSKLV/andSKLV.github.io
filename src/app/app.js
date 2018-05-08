import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

export class App {
	constructor ({el}) {
		this.el = el;
		let messages = this.getMessages();		
		this.chat = new Chat ({el: document.createElement('div'), "messages": messages,});
		this.form = new Form ({
			el: document.createElement('div'),
			onSubmit: this.formSubmit.bind(this)});
		this.el.append(this.chat.el, this.form.el);
		this.render();
	}

	render () {
		this.chat.render();
		this.form.render();
	}

	formSubmit(text) {
		this.chat.addMessage(text);
		this.render();
	}

	getMessages() {
		return [
			{ sender: 'Julia', text: 'Hi! How are you?' },
			{ sender: 'Phill', text: 'I just got a lot of job and want to...' },
			{ sender: 'Julia', text: 'Too boring' },]
	}
}