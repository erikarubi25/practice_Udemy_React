//Siempre debe de contar con estas partes:
import React from 'react';
import ReactDOM from 'react-dom/client';

import moduleName from './HelloWorldApp';

//Para renderizar se usa

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);