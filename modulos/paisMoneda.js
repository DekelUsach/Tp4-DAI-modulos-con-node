import countryToCurrency from 'country-to-currency'

const paisMoneda = (country) =>{

    
const moneda = countryToCurrency[country]
return moneda;
}
export default paisMoneda;