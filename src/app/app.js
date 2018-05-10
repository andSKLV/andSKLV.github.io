import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';
import {httpReq} from './../modules/html.service.js';

export class App {
	constructor ({el}) {
		this.el = el;			
		this.chat = new Chat ({el: document.createElement('div')});
		this.form = new Form ({
			el: document.createElement('div'),
			onSubmit: this.formSubmit.bind(this)});
		this.el.append(this.chat.el, this.form.el);
		this.http = new httpReq({ url: 'https://chat-19516.firebaseio.com/chat.json'});
		this.getMessages();
	}

	render () {
		this.chat.render();
		this.form.render();
	}

	formSubmit(mes) {
		this.http.post(mes);
		// this.chat.addMessage(mes);
		this.getMessages();
		this.render();
	}

	getMessages() {		
		this.http.get((obj) => {
			this.chat.clear();
			Object.values(obj).forEach((msg) => { this.chat.addMessage(msg) });	
			this.render();
		});
	}
}