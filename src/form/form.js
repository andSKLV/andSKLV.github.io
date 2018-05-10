export class Form {
	constructor ({el,onSubmit}) {
		this.el = el;
		this.onSubmit = onSubmit;
		this.el.addEventListener('submit', this._onSubmit.bind(this));		
	}

	render () {
		this.el.innerHTML = `
			<form class='form'>
				<textarea class='form_text'></textarea>
				<input class='form_submit' type='submit' value='Send'></input>
			</form>`
			this.el.querySelector('textarea').addEventListener('submit',()=>this._onSubmit());
	}

	_onSubmit (event) {
		event.preventDefault();
		this.onSubmit({name:'you', text: event.target.querySelector('textarea').value});
	}
}