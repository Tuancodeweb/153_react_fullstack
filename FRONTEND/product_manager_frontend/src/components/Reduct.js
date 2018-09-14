import React, { Component } from 'react';

class Reduct extends Component {
    render() {
        return (
  <div className="col-3">
    <div className="card text-left">
      <img className="card-img-top" src={this.props.images} alt="anh dep" />
      <div className="card-body">
        <h5 className="card-title" float-left>{this.props.product_name}</h5>
        <h5 className="card-title" float-right>{this.props.product_price}</h5>
      </div>
    </div>
  </div>

        );
    }
}

export default Reduct;