# Hola!!

Para correr el proyecto, luego de hacer el npm i en la raiz, debemos dirigirnos a la carpeta ./api. Alli debemos correr otro npm i.

En una terminal ejecutar node index.js (dentro de la carpeta api) para levantar la MockApi.

Luego en la raiz del proyecto ejecutamos npm start y ya queda listo para probar.

## Comentarios

Bueno, como comentario principal he de decir que me llevo mas tiempo del pensado debido a algunos factores que no tuve en cuenta.
El principal de estos factores fue haber empezado a codear sin diagramar la solucion, con la ansiedad de empezar a resolverlo no lo pense bien y luego se me hizo un poco cuesta arriba ya que
no tenia un camino bien definido.

## Limitaciones
Respecto a limitaciones creo que cubre todos los puntos de la letra por lo que entiendo que no tendria limitaciones funcionales.
Hay un detalle que me quedo pendiente que es al dar F5 en las transferencias no vuelve a listarnos las cuentas del usuario.
Tambien al dar f5 en el ticket arroja un error ya que no puede cargar algunas props que recibe por parametro.

## Mejoras
Como mejoras utilizaria algn context o redux para manejar un state mas global y asi corregir facilmente los errores anteriores.
Otra forma seria al no obtener los parametros redirigir al usuario a la ventana de transfer y en la ventana de transfer al no tener las cuentas utilizar useEffect
con un llamado a la api para que devuelva la informacion nuevamente para ese token.

Otras mejoras que haria serian segmentacion de codigo, por ejemplo en el transfer hay mucha logica que podria extraerse a un archivo para facilitar la legibilidad del codigo.

## Datos de prueba
logins:
    user: gaston24
    pass: gaston123
    -------------
    user: jenny
    pass: jenny123

cuentas destino
[
        {
            nombre: 'Pedro', 
            apellido: 'Diaz',
            cuentas: [
                {
                    cuenta: 563445,
                    saldo:24235,
                    moneda: 'UYU'
                },
                {
                    cuenta: 934856,
                    saldo:454,
                    moneda: 'USD'
                },
                {
                    cuenta: 3467,
                    saldo:456,
                    moneda: 'EUR'
                }
            ]
        },
        {
            nombre: 'Marta', 
            apellido: 'Perez',
            cuentas: [
                {
                    cuenta: 867465,
                    saldo:678769,
                    moneda: 'UYU'
                },
                {
                    cuenta: 678534,
                    saldo:45633,
                    moneda: 'USD'
                },
                {
                    cuenta: 797324,
                    saldo:63534,
                    moneda: 'EUR'
                }
            ]
        }

    ]