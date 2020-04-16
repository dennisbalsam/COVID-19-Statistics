import React, {useState, useEffect} from 'react'
import { NativeSelect,FormControl} from '@material-ui/core'
import styles from './countrypicker.module.css'
import { fetchCountries } from '../../api'


const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();

        
    }, [setFetchedCountries])

    return (
        <FormControl style={{marginBottom:'20px', marginTop:'40px'}} className={styles.formControl}>
            <NativeSelect style={{backgroundColor:'white', fontSize: '20px'}}defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker