import Business from "../Business/Business";
import "./BusinessList.css";
import React from 'react';

class BusinessList extends React.Component { 
    render() {
        return (
          <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
          </div>
        );
    }
}

export default BusinessList;