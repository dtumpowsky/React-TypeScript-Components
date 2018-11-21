import * as React from 'react';
// import PropTypes from 'prop-types';
// import RadioControl from 'RadioControl.tsx';
import EthereumForm from './EthereumForm';
import ExchangeForm from './ExchangeForm';
import LocalFileForm from './LocalFileForm';


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
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={this.state.selectedRadio === 'option1'} onChange={this.handleRadioChange}/>
                    Option 1
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" checked={this.state.selectedRadio === 'option2'} onChange={this.handleRadioChange}/>
                    Option 2
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option3" checked={this.state.selectedRadio === 'option3'} onChange={this.handleRadioChange}/>
                    Option 3
                  </label>
                </div>
              </form>
              <button className="bg-primary">Hello</button>
            </div>
            <div className="col-md-6">
              {this.RadioControl()}
            </div> 
          </div>             
        </div>
      </div>
    );
  }
  
  public RadioControl() {
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
}

export default RadioSelector;