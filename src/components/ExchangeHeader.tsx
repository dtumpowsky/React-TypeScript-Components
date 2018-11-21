import * as React from 'react';
import question from '../question-mark.png';


class ExchangeHeader extends React.Component {

  public render() {
    return (
      <div className="ExchangeHeader">
        <p className="App-intro">
          <span>&#9313;</span>
          <span className="numbered-title"> 
            Enter Exchange Details
            <img src={question} className="question-mark" alt="question mark" />
          </span>
        </p>
      </div>  
    );
  }
}

export default ExchangeHeader;