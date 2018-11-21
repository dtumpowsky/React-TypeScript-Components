import * as React from 'react';


class SelectAccountHeader extends React.Component {

  public render() {
    return (
      <div className="SelectHeader">
        <p className="App-intro">
          <span>&#9312;</span>
          <span className="numbered-title">Select Account Type</span>
        </p>
      </div>  
    );
  }
}

export default SelectAccountHeader;