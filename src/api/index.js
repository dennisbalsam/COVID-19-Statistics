// functions to fetch data
import axios from 'axios'
import CountryPicker from '../components/Countries/countrypicker';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let urlalter = url;

    if(country) {
        urlalter = `${url}/countries/${country}`
        console.log(urlalter)
    }

    //try catch for api
    try {
        // use axios to make api call
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(urlalter);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        
        return modifiedData;

    } catch (error) {
        console.log(error)        
    }
}


export const fetchDailyData = async() => {
    try {
        const {data } = await axios.get(url+ '/daily')

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async() =>{
    try {
        const { data: {countries}} = await axios.get(url + '/countries')

        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}