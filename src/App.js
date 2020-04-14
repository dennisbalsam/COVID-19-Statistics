import React, { Component } from 'react'
import styles from './App.module.css'
// import components
import Cards from './components/DataCards/cards'
import Countries from './components/Countries/countrypicker'
import Chart from './components/Chart/chart'
import { fetchData } from './api'

class App extends Component {

    state = {
        data: {},
    }

    // call api
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Countries />
                <Chart/>
            </div>
        )
    }
}

export default App

