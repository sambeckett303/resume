myApp.factory('ModalService', Service);
function Service() {
    var modals = []; // array of modals on the page
    var service = {};

    service.Add = Add;
    service.Remove = Remove;
    service.Open = Open;
    service.Close = Close;
    service.setModalContent = setModalContent;
    service.setModalTitle = setModalTitle;
    service.getModalContent = getModalContent;
    service.getModalTitle = getModalTitle;
    service.modalContent = '';
    service.modalTitle = '';

    return service;

    function Add(modal) {
        // add modal to array of active modals
        modals.push(modal);
    }
    
    function Remove(id) {
        // remove modal from array of active modals
        var modalToRemove = _.findWhere(modals, { id: id });
        modals = _.without(modals, modalToRemove);
    }

    function Open(event) {
        var id = event.currentTarget.id;
        // set modalController data

        // open modal specified by id
        //var modal = _.findWhere(modals, { id: id });
        var modal = modals[0];
        this.currentModal = modal;
        modal.open();
    }

    function Close() {
        var modal = this.currentModal;
        delete this.currentModal;
        modal.close();
    }

    function setModalContent(content) {
        this.modalContent = content;
    }

    function setModalTitle(title) {
        this.modalTitle = title;
    }

    function getModalContent() {
        return this.modalContent;
    }

    function getModalTitle() {
        return this.modalTitle;
    }
};