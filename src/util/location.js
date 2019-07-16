import axios from 'axios'

export async function convertAddressToCoordinate(address){
    // TODO API key should be stored in config. google has looow limit
    const urlParam = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBPLTJT4_5icxwmLgW8YyXvN7BdTprCPj4`
    let response = await axios.get(urlParam)
    console.log(response);
}