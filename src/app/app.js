import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';
import {Login} from './../login/login.js';
import {httpReq} from "./../modules/html.service.js";

export class App {
	constructor ({el}) {
		this.el = el;
		this.nick = '';
		this._login ();		
	}

	_login() {
		this.login = new Login ({
			el: document.createElement('div'),
			onSubmit: this.loginSubmit.bind(this),
		});
		this.el.append(this.login.el);
	}
	_initChat() {
		this.chat = new Chat({ el: document.createElement('div'), nick: this.nick });
		this.form = new Form({
			el: document.createElement('div'),
			onSubmit: this.formSubmit.bind(this),
			btnName: 'Send',
		});
		this.el.append(this.chat.el, this.form.el);
		this.http = new httpReq({ url: 'https://chat-19516.firebaseio.com/chat.json' });
		this.getMessages();
		this._renderApp();
		setInterval (()=>{this._reload()},1000);
	}

	_renderApp() {
		this.chat.render();
		this.form.render();
		this.chat.scrollToBottom();
	}

	_reload(){
		this.getMessages();
		let scrollState = this.chat._saveScrollState();
		this.chat.render();
		this.chat._setScrollState(scrollState);
	}

	formSubmit(mes) {
		mes.name = this.nick;
		this.http.post(mes);		
		this.getMessages();
		this._renderApp();
	}

	loginSubmit ({text}) {
		this.nick = text;
		this.clearWindow();
		this._initChat();
	}

	clearWindow () {
		this.el.innerHTML = '';
	}
	getMessages() {		
		this.http.get((obj) => {
			this.chat.clear();
			Object.values(obj).forEach((msg) => { this.chat.addMessage(msg) });				
		});
	}
}