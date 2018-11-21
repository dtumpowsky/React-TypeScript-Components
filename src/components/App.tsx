import * as React from 'react';
import '../App.css';
import RadioSelector from './RadioSelector';
import SelectAccountHeader from './SelectAccountHeader';


class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Add New Account</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SelectAccountHeader />
            </div>  
            <div className="col-md-8">
              <div className="radio-row">
                <RadioSelector />
              </div>
            </div>
          </div> 
        </div>     
      </div>
    );
  }
}

export default App;
