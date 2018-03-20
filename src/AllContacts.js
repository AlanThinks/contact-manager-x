import React from "react";
import Flux from "react-flux-dash";
import myStore from "./myStore";
// import { Link } from "react-router-dom";
import {} from 'react-bootstrap'
import Header from "./Header"
import "./Home.css";

export class AllContacts extends Flux.View {
  constructor() {
    super();
    this.state = {
      name:"",
      email:"",
      contacts:[]
    };

    // start listening to changes on MyStore for especific event
    this.bindStore(myStore);
    // binding methods I will use

  }

  handleStoreChanges() {
    // retrieve the stuff from the store
    let newContacts = myStore.getContacts();
    // setState the new data
    this.setState({contacts:newContacts})
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <p>Here Are All Contacts</p>
      </div>
    );
  }
}
