export class Chat {
	constructor ({el,nick = 'you'}) {
		this.el = el;
		this.messages = [];
		this.name = nick;
	}

	render () {		
		const box = document.createElement('div');
		box.classList.add('chat_window');
		let htmlCode = this.messages.map(({name,text})=>{
			if (name===this.name) name = 'you';
			return `<div class="message">
						<h3>${name}</h3>
						<p>${text}</p>
					</div>`
		}).join('');		
		box.innerHTML = htmlCode;
		this.el.innerHTML='';
		this.el.append(box);				
	}

	scrollToBottom () {
		let win = this.el.querySelector('.chat_window');
		win.scrollTop = win.scrollHeight;
	}

	addMessage ({name,text}) {		
		if (text==='') return true; 
		this.messages.push({
			name: `${name}`, 
			text: `${text}`});
	}

	clear (){
		this.messages = [];
	}
}