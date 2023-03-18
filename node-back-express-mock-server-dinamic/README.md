### Servidor node para mock simple para desarrollos locales

* Node JS
* Express

### Instalacion
* instalar modulos
```
    npm i express cors fs
    npm i nodemon -D
```

* Iniciar
```
    npm run dev
```

### Descripcion del MOK API
* Permite la creacion de responses json o xml de forma dinamica, basta con agregarlos a en el archivo `src/datos/db.js`
```
    #Agregar un json con la siguiente estructura 
    {
        "endpoint":"/example", #Endpoint que generara
        "status": 200, #Estatus de retorno
        "type":"json", #Tipo si es json o xml
        "http":"get", #metodo http [get,post,delete,put] => de momento esos
        "response": {"valor":12345} #Especificar el json a retornar o el archivo xml(Se debe dejar un archivo xml en la ubicacion src/datos/)
    }
```