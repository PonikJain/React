import React from "react";
import "./shortDetailForm.css";

class ShortDetailForm extends React.Component {
  render() {
    return (
      <div className="formParentDiv">
        <div className="formChildDiv">
          <div className="formContainer">
            <div className="formContent">
              <section>
                <h1 className="formHeader">
                  Book homes, hotels, and more on Booking.com
                </h1>
              </section>
              <form action="">
                <div className="whereDiv">
                  <div className="whereLebel">
                    <span className="formLabrlFont">WHERE</span>
                  </div>
                  <div className="inputBoxDiv">
                    <input type="text" className="inputTextBox" id="" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortDetailForm;
