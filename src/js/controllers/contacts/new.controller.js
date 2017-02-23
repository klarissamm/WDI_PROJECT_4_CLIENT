angular
  .module('avocado')
  .controller('ContactsNewCtrl', ContactsNewCtrl);

ContactsNewCtrl.$inject = ['API', '$state', '$resource', 'Contact'];
function ContactsNewCtrl(API, $state, $resource, Contact) {
  const vm  = this;

  vm.create = contactsCreate;

  function contactsCreate(){
    return Contact
      .save({ contact: vm.contact })
      .$promise
      .then(() => {
        $state.go('contactsIndex');
      });
  }
}
