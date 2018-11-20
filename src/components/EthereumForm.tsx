import * as React from 'react';

class EthereumForm extends React.Component {
  
  public render() {
    return (
      <div className="EthereumForm">
        <div className="container">
          <form>
            <div>    
              <label>
                Public Address
              </label>
              <input type="text"/>
            </div> 
            <div>     
              <label>
                Account Nickname
              </label>
              <input type="text"/>
            </div>  
              <input type="submit" value="Add Address" />
          </form>
        </div>
      </div>
    );
  }
}

export default EthereumForm;