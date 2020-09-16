import React, {useEffect,useState,useRef} from "react";
import {withRouter,useHistory } from 'react-router-dom';
import _ from 'underscore';
import FetchAPI from '../../apis/FetchAPI';
import {getIndicator,getStates,getCountryRecord} from '../../apis/endpoints';
const aboutcontroller = new AbortController();

const PlaygroundProvider = ({match,children}) => {

      const[data, setData] = useState([]);
      const[countries, setCountries] = useState([]);
      const[states, setStates] = useState([]);
      const[indicator, setIndicator] = useState({});
      const[hideyear, setHideyear] = useState(true);
      const[isLoaded, setIsLoaded] = useState(false);
      const[country, setCountry] = useState('Nigeria');
      const[noData, setNoData] = useState(false);
      const[shortIndicator, setShortIndicator] = useState('');

useEffect(() => {

  setData(getData);
  setIndicator(getIndicator);
  //fetchIndicator(match.params.id);
  //fetchCountryRecord(country);
  //fetchStates(country);
  setShortIndicator(match.params.id);

  return () => {
    aboutcontroller.abort();
  }

},[])

const getData = [
    { year: '2015', value: 120, label: '2015', country: 'Nigeria', bearer: 'anonymous'},
    { year: '2016', value: 150, label: '2016', country: 'Nigeria', bearer: 'anonymous' },
    { year: '2017', value: 75, label: '2017', country: 'Nigeria', bearer: 'anonymous' },
    { year: '2019', value: 62, label: '2019', country: 'Nigeria', bearer: 'anonymous' },
    { year: '2018', value: 60, label: '2018', country: 'Nigeria', bearer: 'anonymous' },
    
  ]
const getIndicator = {
  indicator: "Proportion of population below the international poverty line, by sex, age, employment status and geographical location(urban/rural) | percent",
} 


const fetchStates = (country) =>{

  FetchAPI(getStates(country))
  .then((result) => {
    setStates(result.data);
  })
  .catch((error) => {
    setStates([]);
  });

}

const fetchIndicator = (indicator) => {

  FetchAPI(getIndicator(indicator))
  .then((result) => {
    const returnIndicator = result.data.reduce((a,b) => Object.assign(a,b), {});
    setIndicator(returnIndicator);
  })
  .catch((error) => {
    setIndicator([]);
  });

  }

const fetchCountryRecord = (country) => {

  const indicator = match.params.id;
  FetchAPI(getCountryRecord(country,indicator))
  .then((result) => {
    setData(result.data);
    setShortIndicator(indicator);
    setNoData(false);
     
  })
  .catch((error) => {
    setData([]);
    setNoData(true);
  });

}
  
const queryCountry = (e) => {
  e.preventDefault();
  const country = e.target.value;
  //fetchCountryRecord(country);
  //fetchStates(country);
}
const toggleHideYear = (e) => {
  e.preventDefault();
  setHideyear(!hideyear)
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
      queryCountry: (e) => queryCountry(e),
      toggleHideYear: (e) => toggleHideYear(e),
    })
);
    
};

module.exports = withRouter (PlaygroundProvider);
