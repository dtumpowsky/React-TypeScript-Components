import * as React from 'react';
import EthereumForm from './EthereumForm';
import ExchangeForm from './ExchangeForm';
import LocalFileForm from './LocalFileForm';
import EthereumHeader from './EthereumHeader';
import ExchangeHeader from './ExchangeHeader';
import LocalFileHeader from './LocalFileHeader';
import DefaultFormHeader from './DefaultFormHeader';


interface RadioSelectorState{
  selectedRadio: string;
}

class RadioSelector extends React.Component<any, RadioSelectorState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      selectedRadio: ''
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  
  public handleRadioChange(changeEvent: any) {
    this.setState({
      selectedRadio: changeEvent.target.value
    });
  }
    
  public render() {
    return (
      <div className="RadioSelector">
        <div className="select-account-2">
          {this.headerControl()}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="radio">
                  <label>
                    <span>
                      <input className="checkbox-radio" type="radio" value="option1" checked={this.state.selectedRadio === 'option1'} onChange={this.handleRadioChange}/>
                      <span className="radio-label">
                        Exchange
                      </span>
                    </span>
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <span>
                      <input className="checkbox-radio" type="radio" value="option2" checked={this.state.selectedRadio === 'option2'} onChange={this.handleRadioChange}/>
                      <span className="radio-label">
                        Ethereum Address
                      </span>
                    </span>
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <span>
                      <input className="checkbox-radio" type="radio" value="option3" checked={this.state.selectedRadio === 'option3'} onChange={this.handleRadioChange}/>
                      <span className="radio-label">
                        Local File
                      </span>  
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="col-md-8">
              <div className="radio-column-2">
                {this.radioControl()}
              </div>
            </div> 
          </div>             
        </div>
      </div>
    );
  }
  
  public radioControl() {
  const selectedRadio = this.state.selectedRadio;
    if (selectedRadio === 'option1') {
      return <ExchangeForm />;
    } else if (selectedRadio === 'option2') {
      return <EthereumForm />;
    } else if (selectedRadio === 'option3')  {
      return <LocalFileForm />;
    }
    return null;
  }
  
  public headerControl() {
  const selectedRadio = this.state.selectedRadio;
    if (selectedRadio === 'option1') {
      return <ExchangeHeader />;
    } else if (selectedRadio === 'option2') {
      return <EthereumHeader />;
    } else if (selectedRadio === 'option3')  {
      return <LocalFileHeader />;
    }
    return <DefaultFormHeader />;
  }
}





export default RadioSelector;