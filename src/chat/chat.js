export class Chat {
	constructor ({el, messages = [], nick = 'you'}) {
		this.el = el;
		this.messages = messages;
		this.yourNickname = nick;
	}

	render () {		
		const box = document.createElement('div');
		box.classList.add('chat_window');
		let htmlCode = this.messages.map(({sender,text})=>{
			return `<div class="message">
						<h3>${sender}</h3>
						<p>${text}</p>
					</div>`
		}).join('');		
		box.innerHTML = htmlCode;
		this.el.innerHTML='';
		this.el.append(box);
	}

	addMessage (mes) {
		if (mes==='') return true; 
		this.messages.push({
			sender: `${this.yourNickname}`, 
			text: `${mes}`});
	}
}