export class httpReq {
    constructor ({url = ''}) {
        this.path = url;
    }

    get (cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.path, true);
        xhr.addEventListener('readystatechange', ()=>{
            if (xhr.readyState !== 4) {return;}
            cb (JSON.parse(xhr.responseText));
        });
        xhr.send();
    }

    post (mes) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.path,true);
        xhr.send(JSON.stringify(mes));
    }
}