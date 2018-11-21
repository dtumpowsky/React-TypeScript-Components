import * as React from 'react';
import question from '../question-mark.png';


class LocalFileHeader extends React.Component {

  public render() {
    return (
      <div className="LocalFileHeader">
        <p className="App-intro">
          <span>&#9313;</span>
          <span className="numbered-title"> 
            Upload Local File (.csv, .xls, .xlsx)
            <img src={question} className="question-mark" alt="question mark" />
          </span>
        </p>
      </div>  
    );
  }
}

export default LocalFileHeader;