# Instalacion 
* Requisitos
  * Instalar node
  * Instalar npm , manejador de paquetes

* Instalar typescript para el proyecto.
```
    # Instalar typescript 
    # `--save-dev` : Guardar como dependencia de desarrollo en el proyecto
    npm install typescript --save-dev
    
    # verificar version
    npx tsc --version
```

# Configuracion
* Genera el package.json
  * Es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto
``` 
  npm init -y
```

* Genera el tsconfig.json
  * Es el que indica en un proyecto que se está trabajando con TypeScript
```
  npx tsc --init
```
* Configurar lo siguiente en el archivo `tsconfig.json`:
```
  "rootDir": "./src",  # Donde iran archivo ts
  "outDir": "./dist",  #  donde iran las trancopilaciones
```

# Comandos sobre el proyecto
* Transpilar todos los archivos
```
  npx tsc
```

* Transpilar todos los archivos (Reactiva)
```
  npx tsc --watch
```


# Comandos sobre archivos
* Ejecutar transpilador typescript para archivos `ts` 
```
  npx tsc archvivo.ts

  # Generara un archivo del mismo nombre con extencion '.js'

```
* Ejecutar transpilador a una version mas vieja
  * `--target <version>`
```
  npx tsc archvivo.ts --target es6
```
* Ejecutar transpilador y enviar archivos generados `js` a otra carpeta
  * `--outDir <ubicacion>`
```
  npx tsc archvivo.ts --outDir disc
  npx tsc archvivo.ts --target es6 --outDir disc
  ```

* Ejecutar archivo transpilado 
```
  node dist/01-hello.js
```



# Plugins o complementos VS CODE

* Instalar EditorConfig for VS code
  * Configuracion
    ```
      # Editor configuration, see https://editorconfig.org
        root = true

        [*]
        charset = utf-8
        indent_style = space
        indent_size = 2
        insert_final_newline = true
        trim_trailing_whitespace = true

        [*.ts]
        quote_type = single

        [*.md]
        max_line_length = off
        trim_trailing_whitespace = false
    ```
* Atrapar errores en archivos Javascripts
  *  Analizador de código estático (Typescript) 
    * Agregar en el encabezado de archivos `js` la siguiente instruccion
    * Es solo para Viscual studio code.
      ```
          # @ts-check
      ```


# Flexibilidad de JavaScript
```
  let example = null; #  null
  example = 'string'; # string
  example = 3.14; # number
  example = true; # boolean
  example = undefined; # undefined
  example = []; # array
  example = Symbol("abc") # Symbol

  example = { # ojbs
    name: 'juan',
    lasName: 'guru'
  }

  example = function (a){ #  functions
  return a;
  }
```

# Typescript sintaxis

* Tipado en variables;
  * Declaracion: `const productTipe`
  * Tipado (Type Annotation): `number`
    * Si definimos la primera letra en minuscula, hacemos referencia el tipo de dato: `number`
    * Si definimos la primera letra en mayuscula, hacemos referencia al objeto: `Number`
  * Valor: `12`
```
    const productTipe: number = 12;
```

* Variables
```
    # Tipos inferidos (Explicita)
    let myName = "Victoria"; # Esta infiriendo que es tipo string
    const myNumber = 1000; # Esta infiriendo que es tipo number y que puede tener unicamente ese valor

    # Indicar el tipo de dato
    let myName: string = "Victoria"; # indicar el tipo de dato
    const myNumber: number = 2000; # Puede tener unicamente ese valor
     
```

* Function
```
    #  Function anonima autoejecutada
    #  Function: () => {...}
    (() => {
      # codigo...
    })();
```

* number
```
    #uso
    let myNumber: number = 30; // Simepre usar el tipo de dato en minuscula.

    myNumber = myNumber + 10; # CORRECTO
    myNumber = myNumber + "10"; # INCORRECTO

    # Uso de variables sin inicializar (Serán señalados como errores 
    # aquellas variables que queramos usar sin haberles dado un valor inicial)
    let productInStock: number;
    console.log("Product in stock: " + productInStock); # 'productInStock' se sennala com error (No esta inicializada)

    # [1] Conversion de string a number simple
    let discount: number = parseInt("123");

    # [2] Conversion de string a number
    let numeroString: string = "100";
    let nuevoNumero: number;
    nuevoNumero = parseInt(numeroString);

```
* number: NaN
```
    # Conversion de string a number
    # NaN : es parte del conjunto de numeros
    let numeroPrueba: number = parseInt("palabra");
    console.log(numeroPrueba); //NaN

```

* number: Binarios
```
    # Binarios: se definen colocando "0b" al inicio del valor
    let primerBinario = 0b1010; //CORRECTO
    let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

    # Hexadecimales: se definen colocando "0x" al inicio del valor
    let primerHexa = 0xfff; //CORRECTO
    let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido

    # En consola, si están correctamente asignados, 
    # se hará una conversión a decimal de dichos números:
    let primerHexa = 0xfff;
    console.log(primerHexa); // 4095

    let primerBinario = 0b1010;
    console.log(primerBinario); // 10

```
* boleeans
```
    # Este tipo de dato puede tomar dos valores: true o false
    let isEnable: boolean = true;
    let isNew = false;
```

* string
```
    # Este tipo de dato nos permite almacenar una cadena de caracteres.
    # Podemos definir un string con:

    # Comillas simples:
    let myProduct = 'Soda'; //CORRECTO
    let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
    let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO

    # Comillas dobles
    let myProduct = "Soda"; //CORRECTO
    let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
    let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO

    # Usando backticks (interpolación de strings)
    let myName = `Frank`;

    # Usando backticks: Declarar valores de múltiples líneas
    let texto = `
    Nunca
    pares
    de aprender :)
    `;

    # Usando backticks:  llaves ${}
    let variableTitulo = "TypeScript";
    let summary = `
        title: ${variableTitulo}
    `;

    # Usando backticks: También respeta la indentación
    let html= `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        ...
      </body>
    </html>
    `;
```

* arrays
```
  # Array
  let prices = [1,2,3,4,5];

  # agregar valor a array
  let prices = [1,2,3,4,5];
  prices.push(6);
  console.log(prices); // [1,2,3,4,5,6]

  # agregar valor a array(number) un tipo string: error
  let prices = [1,2,3,4,5];
  prices.push("texto"); //ERROR. Se espera agregar solo números al array.

  # array: hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo
  let meses = ["Mayo","Junio","Julio"];
  meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.

  ## Tipado de arrays en TypeScript
  # Indicar explícitamente los tipos de datos que almacenará el array
  # No es necesario que inicialices la variable, pues ya le indicaste el tipo de dato
  let prices: (number | string)[] = ["hola",2,4,6,"mundo"];

  # Ejemplo de distintos tipados en arrays
  let prices = ["hola",2,4,6,"mundo"]; // automaticamente se interpreta como (let prices: (number | string))
  // "hola"   => string
  // "mundo"  => string 
  // 2,4,6    => number

  # Ejemplo de distintos tipados en arrays: insercion de elementos dentro de los definidos
  let mixed: (number | string | boolean | Object)[] = ['hola',true]
  mixed.push(12);     //number
  mixed.push('asd');  //string
  mixed.push(true);   //boolean
  mixed.push({});     //array
  mixed.push([]);     //objeto

```
* Any
```
  # nos permite almacenar cualquier tipo de dato en una variable
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ''; // string

  # NOTA: Se recomienda no usar este tipo de dato, pues se considera mala práctica.

  # Tratar Any como un tipo de dato
  myDynamicVar = "chao";
  const otherString = (myDynamicVar as string).toLowerCase();
  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();
```

* Union Types
```
  # Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.

  # Ejemplo => Que tipo de datos quiero que reciba 'userId' : string y number
  let userId: string | number;
  userId = 10;
  userId = "10";

  # Ejemplo en function => Quiero que reciba string y number
  function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
  }

  # Ejemplo en function => Quiero que reciba string y number y que al recibir sepa que tipo valor es el que envia. 
  function helloUser(id: string | number){
    if(typeof id === 'string'){
      console.log(`string: ${id.toLowerCase()} `);
    }else{
      console.log(`number: ${id.toFixed(1)} `);
    }
    
  }
```

* Alias
```
  # La palabra type en los Alias es algo propio de TypeScript.
  # Nos permite darle un conjunto de varios tipos de datos para un alias => 'type <expression> = <tipeDatos>'
  # El alias es un tipo de datos nuevo 'UserID' puede contener los 3 tipos de datos declarados por ejemplo 'string | boolean | number'.
  type UserID = string | boolean | number;

  # Podemos utilizarlo cada vez que  nesecitamos.(Como ti[po de dato de alguna variable.)
  #Ejemplo1
  let dynamicVar: UserID = "300";
  dynamicVar = true;
  dynamicVar = 200;

  #Ejemplo2
  function helloUser(id: UserID){
    ...
  }

```

* Tipos literales (Literal Types)
```
  #podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. 
  let shirtSize: "S" | "M" | "L" | "XL";
  shirtSize = "M"; //CORRECTO
  shirtSize = "S"; //CORRECTO
  shirtSize = "qwrty"; //ERROR. No está en las opciones.
  shirtSize = "SS"; //ERROR. Letra de más.
  shirtSize = "m"; //ERROR. Está en minúscula.
```

* Alias + Tipos Literales
```
  # Combinacion de comceptos

  # 'type' alias asignadole posibles valores con' Tipos Literales'
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  # Ejemplo1: Asignacion de alias 
  let shirtSize: Sizes;
  shirtSize = "M"; //CORRECTO

  # Ejemplo2: 
  function yourSize( userSize: Sizes ){
      console.log(`Tu medida es ${userSize}`);
  }

  yourSize('XL')//CORRECTO
  yourSize('sad')//ERROR. No está en las opciones.
```

* Tipos de datos : Null y Undefined
```
  # Null: es para indicar un valor nulo
  let myVar = null; //Tipo any
  let myNull: null = null; // Tipo null

    # Con Union Types
    let myNumber: number | null = null;
    myNumber = 50;

  # Undefined : para algo indefinido
  let otherVar = undefined; //Tipo any
  let myUndefined: undefined = undefined; //Tipo undefined

    # Con Union Types
    let myString: string | undefined = undefined;
    myString = "Hola mundo";

```

* Example if: si viene con informacion devuelve 'dato'.toLowerCase, en caso contrario si es nulo devuelve 'Nada'
```
  # tradicional
    let myStringName: string | null = null;

    let hello = 'hola';
    if(myStringName){
      hello += myStringName.toLowerCase();
    }else{
      hello += 'Nada';
    }

  # de una linea
    let myStringName: string | null = null;

    let hello = 'hola';
    hello += myStringName?toLowerCase() || 'Nada';


```


* Funciones
```
```