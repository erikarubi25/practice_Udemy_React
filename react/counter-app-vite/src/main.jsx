//Siempre debe de contar con estas partes:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp';


//Para renderizar se usa

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);
