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
			let cls = '';
			if (name===this.name) {
				name = 'you';
				cls =' left_mes';
			}
			return `<div class="message${cls}">
						<h3>${name}</h3>
						<p>${text}</p>
					</div>`
		}).join('');		
		box.innerHTML = htmlCode;
		this.el.innerHTML='';
		this.el.append(box);
	}

	_saveScrollState () {
		let win = this.el.querySelector('.chat_window');
		return win.scrollTop;
	}

	_setScrollState (state) {
		let win = this.el.querySelector('.chat_window');		
		win.scrollTop = state;
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