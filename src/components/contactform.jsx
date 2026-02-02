import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  // Gestion des changements dans les inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion de l'envoi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Ici, remplace par ton endpoint Formspree ou Getform
      const response = await fetch("https://formspree.io/f/mvzqbydg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

return (
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form"
                data-form-id="a4fa3e4a-4ae1-48d6-bbe0-91504193e950"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span>{t('FormLabel_o-hLM8')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    data-form-field-id="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span>{t('FormLabel_Mlh0AG')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nom@entreprise.com"
                    data-form-field-id="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    <span>{t('FormLabel_Ea5AN5')}</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Votre société"
                    data-form-field-id="company"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <span>{t('FormLabel_D5Fl7i')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Décrivez votre projet..."
                    data-form-field-id="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  id="thq_button_AagP"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_AagP"
                  className={`btn-primary btn btn-lg ${status === "sending" ? "disabled" : ""}`}
                  disabled={status === "sending"}
               >
          {status === "sending"
            ? "Envoi en cours..."
            : status === "success"
            ? "Message envoyé !"
            : status === "error"
            ? "Erreur, réessayez"
            : <span>{t('Btn_fSC4AP')}</span>}"
                </button>
              </form>
            </div>
   );
 };

export default ContactForm;
