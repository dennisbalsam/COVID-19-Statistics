import React, { Component } from 'react'
import axios from 'axios'
import styles from './alerts.module.css'
import {
  Grid,
  Button, 
  TextField
} from '@material-ui/core';


const initialState = {
  name: '',
  phoneNumber: '',
  error: false,
  helperText: ''
};

class Alerts extends Component {


  state = {
    name: '',
    phoneNumber: '',
    error: false,
    helperText: ''
  }


sendMessage = async () => {
    const api = await fetch('/api/alert')
    const data = await api.json()
    const text = data.response

    this.setState( { text })
}

storeData = async(event) => {


    event.preventDefault();



    if(this.state.phoneNumber.length === 11) {
      event.target.reset();
      this.setState(initialState)

      let newPerson = {
        number: this.state.phoneNumber,
        name: this.state.name
      }

      axios.post('/api/data', newPerson).then(() =>{
        console.log('success')
      })
      
    }
    else {
      console.log('Error, wrong inputs')
    }

}

handleNameChange = (event) => {
  this.setState({name: event.target.value});
}

handleNumberChange = (event) => {
  if (event.target.value.length === 11) {
    this.setState({ helperText: '', error: false });
    this.setState({phoneNumber: event.target.value});
  } else {
      this.setState({ helperText: 'Invalid Number Format', error: true });
  }
}



render() {
    return (
      <div className={styles.container}>

        <h2 className={styles.info}>Enter your personal information in the below form, for daily statistics about COVID-19</h2>
        <form onSubmit={this.storeData} style={{padding: '30px'}}>
          <Grid>
            <TextField
                  label="Name"
                  defaultValue={this.props.defaultToDoValue}
                  className={styles.input}
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleNameChange}
                  placeholder="John Smith"
                  size="small"
                  required={true}
                  inputProps={{
                    minLength:1
                  }}
                  type="text"
              />
          </Grid>
          <Grid>
              <TextField
                    label="Phone Number"
                    className={styles.input}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleNumberChange}
                    placeholder="12345678910"
                    size="small"
                    required={true}
                    error={this.state.error}
                    helperText={this.state.helperText}
                    inputProps={{
                      maxLength: 11,
                      minLength:11
                    }}
              /> 
          </Grid>

          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
export default Alerts