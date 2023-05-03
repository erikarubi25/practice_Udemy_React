const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5552164,
        lat: 14.2554,
        lng: 34.25178
    }
};

// console.table ( persona );

const persona2 = { ... persona};
persona2.nombre = 'Peter';

console.log ( persona );
console.log ( persona2 )
