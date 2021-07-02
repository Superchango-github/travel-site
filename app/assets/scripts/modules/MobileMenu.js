import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        /**Esto selecciona el cuadrado blanco o toma
         * el id de eso para poder trabajar con el */
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events () {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        /**El bind es para que siga haciendo referencia a si
         * mismo en toggleTheMenu, si no da error */
    }

    toggleTheMenu() {
        //agrega una clase dinamicamente al html
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
        //console.log("Hooray - the icon was clicked.");
    }
}

export default MobileMenu;