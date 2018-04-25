const axios = require('axios');

const getClima = async(lat, lng) => {

	let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f23ac7606e4fb77b4426e89a5ca5b26d`);
	
	return resp.data.main.temp
};

module.exports = {
	getClima
};