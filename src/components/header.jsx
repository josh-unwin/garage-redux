import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1><Link to={`/`}>{this.props.garage}</Link> - Current Inventory</h1>
        <Link to={`/add_new`}>
          <div className="btn btn-flat">Add New Car</div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    garage: reduxState.garage
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchCars },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(Header);
