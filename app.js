const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad a obtener el clima',
		demand: true
	}
}).argv;

let getInfo = async ( direccion ) => {

	try {

		let coors = await lugar.getLugarLatLng( argv.direccion );
		let temp = await clima.getClima( coors.lat, coors.lng );

		return `El clima en ${ coors.direccion } es de ${temp}`;

	} catch (e){

		return `No se pudo determinar el clima en ${ direccion }`;
		
	}
};

getInfo(argv.direccion)
	.then( resp => {
		console.log(resp)
	})
	.catch(e => {
		console.log(e)
	});

// lugar.getLugarLatLng( argv.direccion )
// 	.then( resp => {
// 		console.log( resp );
// 	})
// 	.catch( e => {
// 		console.log( e );
// 	});

// clima.getClima(21.1454686, -88.1163969)
// 	.then(resp => {
// 		console.log(resp);
// 	})
// 	.catch( e => {
// 		console.log( e );
// 	});