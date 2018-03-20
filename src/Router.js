import React from 'react';
import Flux from "react-flux-dash";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AddContact} from './AddContact'
import {AllContacts} from './AllContacts'
//import {AnyComponentYouMightNeed} from "./FromItsFile";

export default class Router extends Flux.View {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            {/*Examples Below*/}
                            <Route exact path="/add-contact" component={AddContact} />
                            <Route exact path="/all-contacts" component={AllContacts}/>
                            {/* <Route exact path="/contacts/:contactId" component={ContactView}/>
                            <Route exact path="/edit-contact/:contactId" component={EditContact}/> */}
                            {/*Default Route below: or maybe use render?*/}
                            <Route component={AddContact} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}