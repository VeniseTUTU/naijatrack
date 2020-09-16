import React, {Component, Fragment} from "react";
import { NavLink, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Indicators from '../uiSources/indicators';
import Chartoptions from '../uiSources/Chartoptions';
import '../../scss/playground.scss';
import {PlaygroundProvider} from '../../components/providers';
const BASE_URL = process.env.NODE_ENV === 'development' 
		? process.env.USE_BASE_URL_ENV
		: process.env.USE_BASE_URL;

const Playground = (props) => {
 
 
    return(

<Fragment>
<Helmet>
<title>VISUALIZE SDGs DATA IN NIGERIA: Visualize SDGs data in Charts</title>
<meta name="description" content="Visualize SDGs data in charts on the 17 goals, 169 targets, and 232 indicators in all 54 African countries." />
<meta name="keywords" content="SDG, SDGs, Visualize, SDGs Data, 54 Countries in Africa, 169 targets, indicators,line chart, bar chart, polar chart" />
</Helmet>  

<PlaygroundProvider match={props.match}>
	{({Input,data,countries,states,indicator,bearers,queryCountry,toggleHideYear}) => (

<Fragment>
<div className="indexPad" onClick={toggleHideYear}>

<div className="TopStrip">
    <div className="TopStrip__Back">
	<Link to="/visualize">   &laquo; Back </Link>
	</div>

	<div className="TopStrip__locationBoxCont">
	  <img src={`${BASE_URL}images/jloc.png`} />
	<select className="TopStrip__locationBoxCont__locationBox" id="" onChange={queryCountry} defaultValue={Input.country}>
	<option value="Nigeria">Nigeria</option>
   </select>
	</div>
	<Link to="/report"> 
	<button className="TopStrip__ReportButton">
       View Report
	</button>
	</Link>
</div>

<Indicators indicatortitle={`${indicator.indicator}`}/>


<div style={{position:'relative',width:'100%'}}>

{  Input.noData ?
 <div className="noData">NO DATA</div> :''
}   
	<Chartoptions filtered={data} states={states} indicator={Input.shortIndicator} country={Input.country}/> 
    <div className="source">Source(s): {`${bearers}`} </div>


</div>
</div>
</Fragment>

)}

</PlaygroundProvider>
</Fragment>
    
	 
    );
    
}

 
module.exports = Playground;