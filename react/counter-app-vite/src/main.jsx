//Siempre debe de contar con estas partes:
import React from 'react';
import ReactDOM from 'react-dom/client';

//Siempre debe de contener un componente q no siempre estara en el index
function App(){
    // document.createElement.... Seria como normalmente se escribe sin react


    return (<h1>Hola mundo!!!</h1>); //Muchas personas acostumbran a usar parentesis para delimitar por donde empieza y donde termina
}

//Para renderizar se usa

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);