import React, { Component } from "react";
import BrandHttp from "./BrandHttpRequestComponents";
import "../../css/Brand/BrandForm.css";
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
    let result = await BrandHttp.saveBrand(objBrand);
    return result;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p className="label-right">Brand Name:</p>
          <input
            className="textbox brandname-padding"
            type="text"
            name="brandname"
          />
        </div>
        <br />
        <div>
          <p className="label-right">Created By:</p>
          <input className="textbox createdby-padding" type="text" name="createdby" />
        <br />
        </div>
        <input className="form-buttom" type="submit" value="Save" />
      </form>
    );
  }
}

export default BrandForm;
