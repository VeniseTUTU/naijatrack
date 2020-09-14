import React, {useEffect,useState,useRef} from "react";
import {withRouter,useHistory } from 'react-router-dom';
import _ from 'underscore';

const PlaygroundProvider = ({match,children}) => {

      const[data, setData] = useState([]);
      const[countries, setCountries] = useState([]);
      const[states, setStates] = useState([]);
      const[indicator, setIndicator] = useState({});
      const[hideyear, setHideyear] = useState('true');
      const[isLoaded, setIsLoaded] = useState(false);
      const[country, setCountry] = useState('Nigeria');
      const[noData, setNoData] = useState(false);
      const[shortIndicator, setShortIndicator] = useState('');

useEffect(() => {

  const indicator = match.params.id;
  
  fetchIndicator(indicator);
  fetchCountryRecord(country);
  fetchCountries();
  fetchStates(country);
  setShortIndicator(match.params.id);

},[])


const getData = () => {  //  set default values
  const bars = [
    { year: '2015', value: 120, label: '2015', country: 'Nigeria'},
    { year: '2016', value: 150, label: '2016', country: 'Nigeria' },
    { year: '2017', value: 75, label: '2017', country: 'Nigeria' },
      { year: '2019', value: 62, label: '2019', country: 'Nigeria' },
    { year: '2018', value: 60, label: '2018', country: 'Nigeria' },
    
    
  ]
  
  return bars;
}

const fetchCountries = () => {

  fetch(process.env.API_URL+'allcountries/u', {signal: this.aboutcontroller.signal})
      .then( (response) => {
    if (response.ok) {
        return response.json();
    }else{
        
        throw new Error('No Data Found');
        
    }
      })
      .then(
    (result) => {
        this.setState({
      countries: result.data,
    });
        
    }
      )
      .catch((error) => {
      this.setState({
            countries: [],
      
        });
    
      });
      
  }

const fetchStates = (country) =>{

  fetch(process.env.API_URL+'states/'+country, {signal: this.aboutcontroller.signal})
      .then( (response) => {
    if (response.ok) {
        return response.json();
    }else{
        
        throw new Error('No Data Found');
        
    }
      })
      .then(
    (result) => {
        this.setState({
      states: result.data,
    });
        
    }
      )
      .catch((error) => {
      this.setState({
            states: [],
      
        });
    
      });
      
  }

  const fetchIndicator = (indicator) => {

    fetch(process.env.API_URL+'oneindicator/'+indicator, {signal: this.aboutcontroller.signal})
        .then( (response) => {
      if (response.ok) {
          return response.json();
      }else{
          
          throw new Error('No Data Found');
          
      }
        })
        .then(
      (result) => {
      const returnValue = result.data.reduce((a,b) => Object.assign(a,b), {});
          this.setState({
        indicator: returnValue,
      });
          
      }
        )
        .catch((error) => {
        this.setState({
              indicator: [],
        
          });
      
        });
        
    }

const fetchCountryRecord = (country) => {

  const indicator = this.props.match.params.id;
  
  fetch(process.env.API_URL+'visualize/'+country+'/'+indicator, {signal: this.aboutcontroller.signal})
      .then( (response) => {
    if (response.ok) {
        return response.json();
    }else{
        
        throw new Error('No Data Found');
        
    }
    
      })
      .then(
    (result) => {
        this.setState({
      data: result.data,
      shortIndicator: indicator,
      noData:false,
        });
        
    }
      )
      .catch((error) => {
      this.setState({
            data: [],
      noData:true
        });
    
      });
  }

const queryCountry = (e) => {
  e.preventDefault();
  const country = e.target.value;
  fetchCountryRecord(country);
  fetchStates(country);
    
  }

const Input = {
    hideyear,
    isLoaded,
    country,
    noData,
    shortIndicator
  }
data.sort((a,b) => a.year - b.year); 
const bearer = _.pluck(data, 'bearer');

return (
    children({
      Input,
      data,
      countries,
      states: _.sortBy(states,'state'),
      indicator,
      bearers: _.uniq(bearer,true),
    })
);
    
};

module.exports = withRouter (PlaygroundProvider);
