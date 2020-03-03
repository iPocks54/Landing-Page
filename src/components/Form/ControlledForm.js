import React, { Component } from "react";
import "./ControlledForm.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Form, Dropdown } from "semantic-ui-react";

const options = [
  { text: "Le tropical", value: "Le tropical" },
  { text: "Le haut urbain", value: "Le haut urbain" },
  { text: "Talassun", value: "Talassun" },
  { text: "Au chalet", value: "Au chalet" },
  { text: "Le mode avion", value: "Le mode avion" }
];

class ControlledForm extends React.Component {
  state = {
    nom: "",
    prénom: "",
    mail: ""
  };

  handleNomChange = e =>
    this.setState({
      nom: e.currentTarget.value
    });

  handlePrenomChange = e =>
    this.setState({
      prenom: e.currentTarget.value
    });

  handleMailChange = e =>
    this.setState({
      mail: e.currentTarget.value
    });

  render() {
    return (
      <Jumbotron className="formjumbotron">
        <Form size="mini" key="mini">
          <Form.Group widths="equal">
            <Form.Field>
              <label>Nom</label>
              <input placeholder="Nom" onChange={this.handleNomChange} />
            </Form.Field>
            <Form.Field>
              <label>Prénom</label>
              <input placeholder="Prénom" onChange={this.handlePrenomChange} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Adresse Mail</label>
            <input
              placeholder="Adresse Mail"
              onChange={this.handleMailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Produits</label>
            <Dropdown
              placeholder="Produit"
              search
              selection
              options={options}
            />
          </Form.Field>
          <Button className="buttonstyle">Commander</Button>
        </Form>
      </Jumbotron>
    );
  }
}

export default ControlledForm;
