import React, { Component } from 'react'

// import components
import Cards from './components/DataCards/cards'
import Countries from './components/Countries/countrypicker'
import Chart from './components/Chart/chart'


export class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Cards />
                <Countries />
                <Chart/>
            </div>
        )
    }
}

export default App

