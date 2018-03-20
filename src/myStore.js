import Flux from 'react-flux-dash'

class MyStore extends Flux.Store{
    constructor(){
        super()
        this.state={
            contacts:[],
        }
    }
    /*
    _myAction(data){

        this.setStoreState({key:value}).emit()

        // OR SPECIFY EVENT NAME
        // this.setStoreState({key:value}).emit('EVENT NAME')
    }
    */
    _newContact(incomingContact){
        let contactsArray = this.state.contacts
        contactsArray.push(incomingContact)
        this.setStoreState({
            contacts: contactsArray
        }).emit()
    }
    getContacts(){
    // Create data returner methods such as this one to be called by
    // handleStoreChanges()
        return this.state.contacts;
    }
}

const myStore = new MyStore()
export default myStore