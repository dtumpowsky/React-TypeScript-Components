import * as React from 'react';

class ExchangeForm extends React.Component {
  
  public render() {
    return (
      <div className="ExchangeForm">
        <div className="container">
          <form>
            <div>
              <label>
                Exchange Name
              </label>
              <br />     
              <select>
                <option selected value="Zoe">Zoe</option>
                <option value="Millie">Millie</option>
                <option value="Norah">Norah</option>
              </select>
            </div>
            <div>    
              <label>
                Public API Key
              </label>
              <br /> 
              <input type="text" required/>
            </div> 
            <div>    
              <label>
                Private API
              </label>
              <br /> 
              <input type="text" required/>
            </div> 
            <div>     
              <label>
                Account Nickname
              </label>
              <br /> 
              <input type="text"/>
            </div>  
              <input type="submit" value="Connect Exchange" />
          </form>
        </div>
      </div>
    );
  }
}

export default ExchangeForm;