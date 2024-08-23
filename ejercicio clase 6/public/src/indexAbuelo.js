import './components/Card/card.js'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    };

    connectedCallback(){
        this.render();
    };

    render(){
        this.shadowRoot.innerHTML = `
        <item-card 
        img = "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"
            tittle = "The Legend of Zelda amiibo"
            description = "Potencia tu juego con los amiibo de la colección The Legend of Zelda."
            txtbutton = "Completa tu coleccion"
        ></item-card>
        <item-card 
        img = "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
            tittle = "Megapromoción 12+2"
            description = "2 meses adicionales al comprar cualquier suscripción de 12 meses."
            txtbutton = "Ver mas detalles"
        ></item-card>
        `;
    
    };
}

customElements.define('app-container', AppContainer);