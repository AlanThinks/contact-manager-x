import Flux from 'react-flux-dash'

class MyActions extends Flux.Action{
    /*
    actionToBeCalledInViews(optionalData){
             //LOGIC GOES HERE w/ optionalData

    this.dispatch('MyStore.myAction', optionalData);
            //you will have to create a _myAction inside MyStore
     } 
     */
addContact(first,email){
    let newContact={
        first: first,
        email: email
    }
    this.dispatch('MyStore.addContact',newContact)
}

}

const myActions = new MyActions()
export default myActions