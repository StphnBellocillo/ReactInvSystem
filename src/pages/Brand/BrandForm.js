import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import BrandController from "../../controller/BrandController";
import Brand from "./BrandPage";

class BrandForm extends Component {
  constructor(props) {
    super(props);
    this.state = { brandName: "", createdBy: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    let objBrand = {};
    objBrand.brandname = data.get("brandname");
    objBrand.isActive = true;
    objBrand.createdby = data.get("createdby");
    let result = await BrandController.saveBrand(objBrand);
    return <Redirect to="/brand" />;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>BrandName:</label>
        <input type="text" name="brandname" placeholder="brandName" />
        <label>Name:</label>
        <input type="text" name="createdby" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BrandForm;
