import * as React from 'react';

class LocalFileForm extends React.Component {
  
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
                <option value="Edi">Edi</option>
              </select>
            </div>
            <div>
              <label>
               File
              </label>
            <br />
              <input type="file"/>
            </div> 
            <div>     
              <label>
                Account Nickname
              </label>
              <br />
              <input type="text"/>
            </div>  
            <button type="submit">Upload File</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LocalFileForm;