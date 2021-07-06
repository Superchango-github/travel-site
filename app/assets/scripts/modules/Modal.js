import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();//para que empiece a escuchar
    }
    
    events(){
        //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking then x close modal button
        this.closeModalButton.click(this.closeMdal.bind(this))

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        //keyCode 27 es el escape
        if (e.keyCode == 27) {
            this.closeMdal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false; //esto es para que el navegador no se valla arriba (go top)
    }

    closeMdal () {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;