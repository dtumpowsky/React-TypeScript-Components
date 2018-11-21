import * as React from 'react';


class LocalFileForm extends React.Component {
  
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
              <select>
                <option selected value="Zoe">Zoe</option>
                <option value="Millie">Millie</option>
                <option value="Norah">Norah</option>
              </select>
            </div>
            <div>
              <label className="form-label">
               File
              </label>
            <br />
              <input type="file" required/>
            </div> 
            <div>     
              <label className="form-label">
                Account Nickname
              </label>
              <br />
              <input className="input-boxes" type="text"/>
            </div>  
            <button className="input-buttons" type="submit">Upload File</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LocalFileForm;