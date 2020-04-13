// functions to fetch data
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    //try catch for api
    try {
        // use axios to make api call
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

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
