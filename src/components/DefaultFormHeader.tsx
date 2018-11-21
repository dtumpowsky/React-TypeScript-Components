import * as React from 'react';


class DefaultFormHeader extends React.Component {

  public render() {
    return (
      <div className="AccountDetails">
        <p className="App-intro-details">
          <span>&#9313;</span>
          <span className="numbered-title">Enter Account Details</span>
        </p>
      </div>  
    );
  }
}

export default DefaultFormHeader;