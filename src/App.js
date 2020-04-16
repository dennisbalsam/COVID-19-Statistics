import React, { Component } from 'react'
import styles from './App.module.css'
// import components
import Cards from './components/DataCards/cards'
import Countries from './components/Countries/countrypicker'
import Chart from './components/Chart/chart'
import { fetchData } from './api'
import Logo from './images/covid-19_logo_CCUA.png'
import Alert from './components/Alerts/alerts'
class App extends Component {

    state = {
        data: {},
        country: ''
    }

    // call api
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async(country) => {
        //fetch data
        //set state
        const fetchedData = await fetchData(country);


        this.setState({ data: fetchedData, country: country })


    }

    render() {
        const { data, country } = this.state;

        return (
            <div style={{marginBottom: '100px'}} className={styles.container}>
                <img width="300px"  src={Logo} alt="logo"></img>
                <Countries handleCountryChange={this.handleCountryChange}/>
                <Cards data={data} />
                <Chart data={data} country={country} />
                <Alert data={data}/>
            </div>
        )
    }
}

export default App

