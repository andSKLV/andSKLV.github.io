export class Form {
	constructor ({el,onSubmit, btnName = 'Ok', placeholder = ''}) {
		this.el = el;
		this.onSubmit = onSubmit;
		this.btnName = btnName;
		this.pHolder = placeholder;
		this.el.addEventListener('submit', this._onSubmit.bind(this));		
	}

	render () {
		this.el.innerHTML = `
			<form class='form'>
				<textarea class='form_text' placeholder=${this.pHolder}></textarea>
				<input class='form_submit' type='submit' value=${this.btnName}></input>
			</form>`
			this.el.querySelector('textarea').addEventListener('submit',()=>this._onSubmit());
	}

	_onSubmit (event) {
		event.preventDefault();
		this.onSubmit({text: event.target.querySelector('textarea').value});
	}
}