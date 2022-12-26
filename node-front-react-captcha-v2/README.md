### Proyecto Prueba de formulario simple con ReCAPTCHA v2
* Descripcion
    * Tiene el ReCAPTCHA-v2 y envia token a ser validado al back-end

* Dependencia 
    * Proyecto Back-End: gradle-spring-boot-rest-captcha-v2
    * Descripcion: valida el token a google.

### Instrucciones
1. Ir a https://www.google.com/recaptcha/admin/create
   1. Acceder en cuenta gmail
   2. Datos (Modo desarrollo)
      1. Etiqueta: localhost
      2. Tipo de reCAPTCHA: Casilla No soy un robot
      3. Dominios: localhost
      4. Propietarios: <correos>
      5. =>aceptar condiciones
      6. Boton 'enviar'
   3. Tras enviar se generaran 2 claves (sitekey,secretkey)
      1. sitekey: Implementar en sitio web
      2. secretkey: Implementar en back-end


### Comandos para arrancar:
```
npm install
npm install --save react-google-recaptcha
npm start
```


### Notas:
* https://developers.google.com/recaptcha/docs/display
* https://www.npmjs.com/package/react-google-recaptcha
<!-- * https://www.youtube.com/watch?v=wGxDfSWC4Ww (Aprende React en 15 Minutos)(repaso)
* https://www.youtube.com/watch?v=3r7YMaT1k6Y (How To Implement reCAPTCHA In ReactJS)(se sacan ideas)
* https://blog.logrocket.com/implement-recaptcha-react-application/ (Tutorial de referencia)(se adapta)
* https://www.youtube.com/watch?v=3yi0yvHgPfQ (Fetch API with Async/Await (GET, POST, PUT, DELETE))
* https://reactjs.org/docs/forms.html (handleSubmit)(Busque como se implementaba el form) -->

