import * as React from 'react';
import question from '../question-mark.png';

class EthereumHeader extends React.Component {

  public render() {
    return (
      <div className="EthereumHeader">
        <p className="App-intro">
          <span>&#9313;</span>
          <span className="numbered-title"> 
            Enter Ethereum Address
            <img src={question} className="question-mark" alt="question mark" />
          </span>
        </p>
      </div>  
    );
  }
}

export default EthereumHeader;