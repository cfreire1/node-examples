import React, { useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha"


export const FormComponent = () => {

  let validatecatcha = false;
  const captchaRef = useRef(null)

  const validateCatcha = () => {
    if (!validatecatcha) {
      alert('Favor validar ReCAPTCHA!!');
    }else{
      alert('Enviado!!');
    }
  }

  const checkCatcha = () => {
    validatecatcha=true;
    console.log(validatecatcha);
  }


  /**
   * Metodo para generar token de sitio y enviarlo a validar al backend
   * @param {*} e 
   */
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const token = captchaRef.current.getValue();//token a verificar con back-end
    captchaRef.current.reset();
    console.log(token);

    //===========================seteo de datos a objeto

    //envio a validar(rest) al backend
    const res = await fetch(process.env.REACT_APP_API_URL,{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'token': token})
    }); 


    //respuesta del back-end
    const resData = res.json();
    resData.then((result) => {

      //exito
      console.log(result);

    }).catch((err) => {
      console.log(err);
    });

}
  
  return (
    <div>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
                <input type="text" id="name" className="input"/>
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
