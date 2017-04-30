export class Display {
    constructor() {
        let body = document.body,
            el = document.createElement("div");
        el.classList.add("msg");
        body.appendChild(el);
        this._el = el;
        this.hide();
    }

    show() {
        this._el.style.visibility = "visible";
        this._visible = true;
    }

    hide() {
        this._el.style.visibility = "hidden";
        this._visible = false;
    }

    get visible() {
        return this._visible;
    }

    print(h, ...p) {
        let df = document.createDocumentFragment(),
            el;
        if (h) {
            el = document.createElement("h1");
            el.textContent = h;
            df.appendChild(el);
        }
        if (p) {
            p.forEach(s => {
                let el = document.createElement("p");
                el.textContent = s;
                df.appendChild(el);
            });
        }
        this._el.innerHTML = "";
        this._el.appendChild(df);
        if (!this.visible) {
            this.show();
        }
    }
}

let display = new Display();
export default display;