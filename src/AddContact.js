import React from "react";
import Flux from "react-flux-dash";
import myStore from "./myStore";
import myActions from "./myActions";
// import { Link } from "react-router-dom";
// import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import Header from "./Header";
import "./Home.css";

export class AddContact extends Flux.View {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contacts: []
    };

    // start listening to changes on MyStore for especific event
    this.bindStore(myStore);
    // Binding methods I will use later on
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleStoreChanges() {
    // retrieve the stuff from the store
    let newContacts = myStore.getContacts();
    // setState the new data
    this.setState({ contacts: newContacts });
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  formSubmit() {
    // myActions.addContact(this.state.name, this.state.email);
    console.log("form submitted");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.formSubmit} className="add-contact">
          <div className='form-group'>
            <input
              type="text"
              id="nameInput"
              className="form-control"
              value={this.state.name}
              placeholder="Enter Name"
              onChange={this.handleName}
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <button className="btn btn-primary">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
