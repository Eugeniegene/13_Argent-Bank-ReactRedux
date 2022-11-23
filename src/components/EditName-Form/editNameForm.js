import React from "react"


const EditNameForm = () => {
    return (
        <form className="user-form" >
          <div className="inputContainer">
            <div className="input-wrapper">
              <input type="text" id="firstname" />
            </div>
    
            <div className="input-wrapper">
              <input type="text" id="lastname" />
            </div>
          </div>
    
          <div className="user-form-buttons">
            <button className="user-form-button">
            </button>
            <button className="user-form-button">
              Cancel
            </button>
          </div>
        </form>
      );
}

export default EditNameForm
