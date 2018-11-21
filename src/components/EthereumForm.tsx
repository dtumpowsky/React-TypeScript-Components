import * as React from 'react';

interface CounterState{
  count: number;
}

class EthereumForm extends React.Component<any, CounterState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleStateReset = this.handleStateReset.bind(this);
  }
  
  public handleCountChange(characters: any) {
    this.setState({
      count: this.state.count + 1
    })
  }
  public handleStateReset(characters: any) {
    this.setState({
      count: 0
    })
  }
  
  public render() {
    return (
      <div className="EthereumForm">
        <div className="container">
          <form>
            <div>    
              <label>
                Public Address
              </label>
              <br /> 
              <input 
                id="ethereum-address" 
                type="text" 
                onChange={this.handleCountChange} 
                required/>
            </div> 
              {this.inputChecker()}
            <div>     
              <label>
                Account Nickname
              </label>
              <br /> 
              <input type="text"/>
            </div>  
              <input type="submit" value="Add Address"/>
          </form>
        </div>
      </div>
    );
  }

  // TODO: Hacky
  public inputChecker() {
    const counter = this.state.count;
    
    if (counter > 4){
      alert('Invalid Entry: Address must be 4 characters');
    }
  }
  
  
}

export default EthereumForm;