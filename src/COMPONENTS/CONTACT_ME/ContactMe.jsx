import React, { useState } from "react";
import "./contactMe.css";
import FormContact from "./FormContacts";

const ContactMe = () => {
  const [showForm, setShowForm] = useState(true);

  const handleShowForm = () => {
    setShowForm(!showForm);
  
  };

  return (
    <section id="contactMe">
      <h2 className="title__contactMe">Contact me</h2>
      <h2>....</h2>

      <div className="info-contactMe">
      <a href="mailto:correo_electronico@example.com?subject=Mail desde tu Portolio&body=Hola Hernán, he visto tu Portfolio y quería contactarte">Enviar correo electrónico</a>

        <p>E-mail: hernangabrielst@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/hernan-gabriel-stagni-a0b27324a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>WhatsApp: +54 358 4313590</p>
      </div>

      {showForm ? (
        <FormContact
          setShowForm={setShowForm}
          handleShowForm={handleShowForm}
        />
      ) : (
        <button className="contact_me" onClick={handleShowForm}>
          Contact me
        </button>
      )}
    </section>
  );
};

export default ContactMe;
