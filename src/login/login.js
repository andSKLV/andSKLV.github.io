import {Form} from './../form/form.js'; 

export class Login {
    constructor ({el, onSubmit}) {
       this.el = el;
       this.onSubmit = onSubmit;    

       this._init();
    }

    _init() {
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this.loginSubmit.bind(this),
            btnName: 'Submit',
            placeholder: 'Login',
        });
        this.el.append(this.form.el);   
        this.render();
    }

    render() {
        this.form.render(); 
    }
    loginSubmit (nick) {
        this.onSubmit(nick);
    }
}