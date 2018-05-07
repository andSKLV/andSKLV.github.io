export class Chat {
	constructor ({el}) {
		this.el = el;
		this.messages = [];

		this.getMessages();
		this.yourNickname = 'you';
	}

	getMessages() {
		
		this.messages = [
		{sender:'Julia', text: 'Hi! How are you?'},
		{sender:'Phill',text:'I just got a lot of job and want to...'},
		{sender:'Julia',text:'Too boring'}, ]
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
		(mes==='') ? this.messages.push({
			sender: `${this.yourNickname}`,
			text: `I'm too busy to write some text`
			}) 
		: this.messages.push({
				sender: `${this.yourNickname}`, 
				text: `${mes}`});
	}
}