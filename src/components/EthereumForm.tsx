import * as React from 'react';


interface CounterState{
  characters: string;
}

class EthereumForm extends React.Component<any, CounterState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      characters: ''
    }
    this.handleCharacterChange = this.handleCharacterChange.bind(this);
  }
  
  //force 4 character limit
  public handleCharacterChange(e: any) {
    e.preventDefault();
    this.setState({
      characters: e.target.value.substring(0,4)
    })
  }
  
  public render() {
    
    const enable = this.isFormValid();
    
    return (
      <div className="form-active">
        <div className="container">
          <form>
            <div>    
              <label className="form-label">
                Public Address
              </label>
              <br /> 
              <input 
                //determines class based on whether character length is valid
                className={!enable ? "error" : "input-boxes"}
                type="string"
                value={this.state.characters} 
                onChange={this.handleCharacterChange}
                required/>
            </div>       
            <div>     
              <label className="form-label">
                Account Nickname
              </label>
              <br /> 
              <input className="input-boxes" type="text"/>
            </div> 
              <button className="input-buttons" type="submit" disabled={!enable}>
                Add Address
              </button>
          </form>
        </div>
      </div>
    );
  }
  
  public isFormValid(){
    if(this.state.characters.length == 4){
      return true;
    } else if (this.state.characters.length == 0) {
      return true;
    }
    return false;
  }
}

export default EthereumForm;