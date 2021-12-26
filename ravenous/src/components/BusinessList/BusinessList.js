import Business from "../Business/Business";
import "./BusinessList.css";
import React from "react";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => (
          <Business business={business} />
        ))}
      </div>
    );
  }
}

export default BusinessList;
