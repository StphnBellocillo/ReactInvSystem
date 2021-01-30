import React, { Component } from "react";
import BrandHttp from "./BrandHttpRequestComponents";
import "../../css/Brand/Brand.css";
import { Link } from "react-router-dom";

let brandArray = [];

class BrandRow extends React.Component {
  render() {
    const row = [];
    console.log("brandArray", brandArray);
    for (var idx = 0; idx < brandArray.length; idx++) {
      console.log("rowobject", brandArray[idx]);
      row.push(
        <TableRow
          key={brandArray[idx]._id}
          _id={brandArray[idx]._id}
          brandname={brandArray[idx].brandname}
          isactive={brandArray[idx].isactive}
        />
      );
    }
    return row;
  }
}

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  deleteClick = (brandid) => {
    console.log("brandid", brandid);
    BrandHttp.deleteBrand(brandid);
  };

  handleClick = (brandid) => {
    console.log("Click happened", brandid);
    alert("brandid", brandid);
  };

  render() {
    return (
      <React.Fragment key={this.props._id}>
        <tr>
          <td>{this.props._id}</td>
          <td>{this.props.brandname}</td>
          <td>{this.props.isactive}</td>
          <td>
            <button onClick={() => this.handleClick(this.props.brandid)}>
              EDIT
            </button>
          </td>
          <td>
            <button onClick={() => this.deleteClick(this.props.brandid)}>
              DELETE
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

class BrandTableComponents extends Component {
  constructor(props) {
    super(props);
    this.getAllBrands();
  }

  async getAllBrands() {
    brandArray = await BrandHttp.getAllBrands();
    return brandArray;
  }

  handleClick() {
    <Link to="/brandcreate" className="btn btn-primary">
      Add Brand
    </Link>;
  }

  addBrandButton() {
    return (
      <Link to="/brandcreate" className="navbar-logo">
        <button onClick={() => this.handleClick()}>ADD</button>
      </Link>
    );
  }

  render() {
    return (
      <>
        <h1 id="title">Brand</h1>
        {this.addBrandButton()}
        <table className="brand">
          <thead>
            <tr>
              <th>_id</th>
              <th>Brand Name</th>
              <th>is Active</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <BrandRow />
          </tbody>
          <tfoot></tfoot>
        </table>
      </>
    );
  }
}

export default BrandTableComponents;
