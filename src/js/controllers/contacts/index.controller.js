angular
  .module('avocado')
  .controller('ContactsIndexCtrl', ContactsIndexCtrl);

ContactsIndexCtrl.$inject = ['Contact', 'CurrentUserService'];
function ContactsIndexCtrl(Contact, CurrentUserService){
  const vm = this;
  vm.contacts = Contact.query();


  vm.getUser = function(){
    return CurrentUserService.currentUser;
  };
}
