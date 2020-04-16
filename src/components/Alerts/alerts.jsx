import React, { Component } from 'react'
import axios from 'axios'
import styles from './alerts.module.css'
import cx from 'classnames';
import {
  Grid,
  Button, 
  TextField
} from '@material-ui/core';


const initialState = {
  name: '',
  phoneNumber: '',
  error: false,
  helperText: '',
  submittionText: ''
};

class Alerts extends Component {


  state = {
    name: '',
    phoneNumber: '',
    error: false,
    helperText: '',
    submittionText: ''
  }


storeData = async(event) => {


    event.preventDefault();



    if(this.state.phoneNumber.length === 10 && isNaN(this.state.phoneNumber) === false) {

      //create object
      let newPerson = {
        number: this.state.phoneNumber,
        name: this.state.name
      }

      // call express backend
      axios.post('https://infinite-depths-83495.herokuapp.com/api/data', newPerson).then((response) =>{
        console.log(response.data)
        this.setState({ submittionText: response.data.response})
      })

  

      //reset the form
      event.target.reset();
      this.setState(initialState)
      
    }
    else {
      console.log('Error, wrong inputs')
    }

}

handleNameChange = (event) => {
  this.setState({name: event.target.value});
}

handleNumberChange = (event) => {
  let input = event.target.value.trim()
  if (input.length === 10 && isNaN(input) === false) {
    this.setState({ helperText: '', error: false });
    this.setState({phoneNumber: input});
  } else {
      this.setState({ helperText: 'Invalid Number Format', error: true });
  }
}



render() {
    return (
      <div className={styles.container}>

        <h2 className={cx(styles.messages,styles.info)}>Enter your personal information in the form below, for daily statistics about COVID-19</h2>
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
                    placeholder="7184567890"
                    size="small"
                    required={true}
                    error={this.state.error}
                    helperText={this.state.helperText}
                    inputProps={{
                      maxLength: 10,
                      minLength:10
                    }}
              /> 
          </Grid>

          <Button type="submit" className={styles.button}>
            Submit
          </Button>
          <h2 className={styles.messages} style={{marginTop: '30px'}}>{this.state.submittionText}</h2>
        </form>
      </div>
    )
  }
}
export default Alerts