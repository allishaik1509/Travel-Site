import $ from 'jquery';
class modal{
constructor(){
	this.openModalButton = $(".open-modal");
	this.modal = $(".modal");
	this.closeModalButton = $(".modal__close");
	this.events();
}
events(){
	this.openModalButton.click(this.OpenModal.bind(this));
	this.closeModalButton.click(this.CloseModal.bind(this));

	$(document).keyup(this.KeyPressHandler.bind(this));
}
KeyPressHandler(e){
	if(e.keyCode == 27){
		this.CloseModal();
	}
}
OpenModal(){
this.modal.addClass("modal--is-visible");
return false;
}
CloseModal(){
	this.modal.removeClass("modal--is-visible");
}

}

export default modal;