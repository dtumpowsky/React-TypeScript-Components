import * as React from 'react';


class ExchangeForm extends React.Component {
  
  public render() {
    return (
      <div className="form-active">
        <div className="container">
          <form>
            <div>
              <label className="form-label">
                Exchange Name
              </label>
              <br />     
              <select className="input-boxes">
                <option selected value="Zoe">Zoe</option>
                <option value="Millie">Millie</option>
                <option value="Norah">Norah</option>
              </select>
            </div>
            <div>    
              <label className="form-label">
                Public API Key
              </label>
              <br /> 
              <input className="input-boxes" type="text" required/>
            </div> 
            <div>    
              <label className="form-label">
                Private API
              </label>
              <br /> 
              <input className="input-boxes" type="text" required/>
            </div> 
            <div>     
              <label className="form-label">
                Account Nickname
              </label>
              <br /> 
              <input className="input-boxes" type="text"/>
            </div>  
              <button className="input-buttons" type="submit">Connect Exchange</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ExchangeForm;