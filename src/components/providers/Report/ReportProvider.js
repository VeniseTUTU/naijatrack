import React, {useEffect,useState,useRef} from "react";
import {withRouter,useHistory } from 'react-router-dom';
import _ from 'underscore';
import FetchAPI from '../../apis/FetchAPI';
import {getAllCountries,getReport} from '../../apis/endpoints';
const aboutcontroller = new AbortController();

const ReportProvider = ({match,children}) => {

      const[data, setData] = useState([]);
      const[countries, setCountries] = useState([]);
      const[regionaldata, setRegionaldata] = useState([]);
      const[isLoaded, setIsLoaded] = useState(false);
      const[country, setCountry] = useState('Nigeria');
      const[noData, setNoData] = useState(false);
      const[reportTab, setReportTab] = useState('Ranking');
      const[disclaimer, setDisclaimer] = useState(true);
      
useEffect(() => {

  setData(getData);
  setRegionaldata(getRegional);
  
  return () => {
    aboutcontroller.abort();
  }

},[])

  const getData = [
    { state: 'Lagos', value: 76, abrv: 'LGS',region: 'South West',composite: 76, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Edo', value: 76, abrv: 'EDO', region: 'South West',composite: 76, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Benue', value: 66, abrv: 'BEU', region: 'South West',composite: 73, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Enugu', value: 69, abrv: 'ENU', region: 'South West',composite: 69, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Akwa Ibom', value: 65, abrv: 'AIB', region: 'South West',composite: 65, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Abuja', value: 64, abrv: 'ABJ', region: 'South West',composite: 64, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Ondo', value: 65, abrv: 'OND', region: 'South West',composite: 65, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Ekiti', value: 64, abrv: 'EKT', region: 'North East',composite: 64, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Oyo', value: 63, abrv: 'OYO', region: 'North East',composite: 63, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Katsina', value: 60, abrv: 'KAT', region: 'North East',composite: 60, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Bauchi', value: 59, abrv: 'BAU', region: 'North East',composite: 59, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Osun', value: 55, abrv: 'OSU', region: 'North East',composite: 55, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Niger', value: 56, abrv: 'NGR', region: 'North East',composite: 56, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Abia', value: 54, abrv: 'ABI', region: 'North West',composite: 54, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Adamawa', value: 51, abrv: 'ADA', region: 'North West',composite: 51, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Anambra', value: 49, abrv: 'ANB', region: 'North West',composite: 49, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Bayelsa', value: 44, abrv: 'BYL', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Rivers', value: 44, abrv: 'RIV', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Cross River', value: 44, abrv: 'CRV', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Delta', value: 43, abrv: 'DEL', region: 'South East',composite: 43, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Ebonyi', value: 41, abrv: 'EBN', region: 'South East',composite: 41, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Gombe', value: 44, abrv: 'GOM', region: 'South East',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Imo', value: 40, abrv: 'IMO', region: 'South East',composite: 40, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Jigawa', value: 37, abrv: 'JIG', region: 'South East',composite: 37, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Kebbi', value: 37, abrv: 'KEB', region: 'South South',composite: 37, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Kogi', value: 36, abrv: 'KOG', region: 'South South',composite: 36, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Kwara', value: 35, abrv: 'KWR', region: 'South South',composite: 35, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Nassarawa', value: 33, abrv: 'NAS', region: 'South South',composite: 33, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Ogun', value: 32, abrv: 'OGN', region: 'South South',composite: 32, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Plateau', value: 31, abrv: 'PLT', region: 'South South',composite: 31, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Sokoto', value: 30, abrv: 'SKT', region: 'North Central',composite: 30, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Taraba', value: 29, abrv: 'TRB', region: 'North Central',composite: 29, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Yobe', value: 30, abrv: 'YBE', region: 'North Central',composite: 30, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Zamfara', value: 27, abrv: 'ZFR', region: 'North Central',composite: 27, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Borno', value: 26, abrv: 'BRN', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Kaduna', value: 26, abrv: 'KAD', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
    { state: 'Kano', value: 26, abrv: 'KAN', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
 ];

 const getRegional = [
  { region: 'South West', value: 66, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
  { region: 'North East', value: 43, abrv: 'NE',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
  { region: 'North West', value: 34, abrv: 'NW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
  { region: 'South East', value: 57, abrv: 'SE',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
  { region: 'South South', value: 52, abrv: 'SS',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
  { region: 'North Central', value: 61, abrv: 'NC',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
     
]

const fetchCountries = () => {
    
  FetchAPI(getAllCountries())
  .then((result) => {
    setCountries(result.data);
  })
  .catch((error) => {
    setCountries([]);
  });

}

const fetchReportData = ($country) => {

  const apidata={
    country: $country
  };
  setIsLoaded(true);
  FetchAPI(getReport(),true,apidata)
  .then((result) => {
    setNoData(false);
    setIsLoaded(false);
    setData(result.data);
    
  })
  .catch((error) => {
    setNoData(true);
    setIsLoaded(false);
  });
}

const selectMultipleOption = (value) => {
 
setCountry(value);
const bb = value;
const apidata={
country: bb.value
};

setIsLoaded(true);
  FetchAPI(getReport(),true,apidata)
  .then((result) => {
    setNoData(false);
    setIsLoaded(false);
    setData(result.data);
    
  })
  .catch((error) => {
    setNoData(true);
    setIsLoaded(false);
  });
}

const toggleDisclaimer = () => {
  setDisclaimer(!disclaimer)
}

const showReportTab = (value) => {
  setReportTab(value)
}

const Input = {
    isLoaded,
    country,
    noData,
    reportTab,
    disclaimer
  }
data.sort((a,b) => a.year - b.year); 
const bearer = _.pluck(data, 'bearer');

return (
    children({
      Input,
      data,
      countries,
      regionaldata,
      selectMultipleOption: (value) => selectMultipleOption(value),
      showReportTab: (value) => showReportTab(value),
      toggleDisclaimer: () => toggleDisclaimer(),
    })
);
    
};

module.exports = withRouter (ReportProvider);
