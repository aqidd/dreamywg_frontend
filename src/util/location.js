import axios from 'axios'

export async function convertAddressToCoordinate(address){
    // TODO API key should be stored in config
    const urlParam = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCoKWfHbsSmyyM3PUpoEifplwkk2iZihJE`
    let response = await axios.get(urlParam)
    return response.data.results[0].geometry.location
}