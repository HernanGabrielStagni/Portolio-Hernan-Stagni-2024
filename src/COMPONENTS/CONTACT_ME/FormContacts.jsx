import React from "react";
import './formContacts.css'





const FormContact = ({setShowForm, handleShowForm}) => {

 

  return (
    <div id='formContacts' className="form__container">
          <header className="form__header">
              <h2>Gracias por contactarte...!</h2>
              {/* <h3>Gracias por contactarte, me comunicaré a la brevedad...!</h3> */}
              <button onClick={handleShowForm} className="buttonClose"> ❌</button>
          </header>     
     
          <form className="form__form"
            // action="https://formsubmit.co/hernangabrielst@gmail.com"
           //https://formsubmit.co/

            action="https://formsubmit.co/64c6be63e0134c75fd8e82621ae8562e"
            method="POST"
          >
            <input name='first Name' placeholder="First Name..." type="text" required/>
            <input name='Last Name' placeholder="Last Name..." type="text" required/>
            <input name='Email'  placeholder="your e-mail..." type="email" required/>
            <textarea  name='Message'   placeholder="Please, write a message" type="text" required></textarea>

            <button  type="submit">send</button>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5177/"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>

        </div>
     
    
  );
};

export default FormContact;
