import React, { useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

/**
 * Componente que muestra formulario con ReCAPTCHA v2
 * @returns Formulario con ReCAPTCHA
 */
export const FormComponent = () => {

  /**
   * Variable para Manejar el comportamiendo del ReCAPTCHA
   */
  let validatecatcha = false;

  /**
   * Variable para restablecer el reCAPTCHA
   */
  const captchaRef = useRef(null)


  /**
   * Metodo que valida que ReCAPTCHA este realizado.
   */
  const validateCatcha = () => {
    if (!validatecatcha) {
      alert('Favor validar ReCAPTCHA!!');
    } else {
      alert('Enviado!!');
    }
  }

  /**
   * Metodo que cambia el estado ReCAPTCHA cuando este a sido realizado.
   */
  const checkCatcha = () => {
    validatecatcha = true;
    console.log(validatecatcha);
  }


  /**
   * Metodo para generar token de sitio y es enviado a validar al backend
   * @param {*} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();//Quita el comportamiento por defecto(submit). (para que no refresque la pagina)
    const token = captchaRef.current.getValue();//token generado de nuestro reCAPTCHA a verificar con back-end
    captchaRef.current.reset();//Después de cada verificación, debemos restablecer el reCAPTCHA
    console.log(token);

    //===========================seteo de datos a objeto

    //envio - validar al backend
    fetch(process.env.REACT_APP_API_URL, {//envio de datos a api
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'token': token })
    })
      .then(response => response.json())//convirtiendo la respuesta en JSON
      .then(data => console.log(data))//respuesta del back-end
      .catch(err => console.log(err));//Por si hay algun error
  }

  //retorno
  return (
    <div>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <form onSubmit={handleSubmit} >

        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <button onClick={validateCatcha} >Submit</button>

        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.REACT_APP_SITE_KEY}
          render="explicit"
          onChange={checkCatcha}
        />
      </form>
    </div>

  )
}
