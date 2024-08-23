class Card extends HTMLElement {
    static get observedAttributes() {
        return [ 'img', 'tittle', 'description', 'txtbutton'];
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this[name] = newValue 
            this.render();
        }
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Card/card.css">
    <div class="app">
        <div class="item-card">
            <img src=${this.img}></img>
            <h1>${this.tittle}</h1>
            <p>${this.description}</p>
            <button>${this.txtbutton}</button>
        </div>
    </div>
        `;
    }
}

customElements.define('item-card', Card);
export default Card;