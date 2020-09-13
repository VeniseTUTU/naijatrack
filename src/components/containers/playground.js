import React, {Component} from "react";
import {Helmet} from "react-helmet";
import _ from 'underscore';
import Indicators from '../uiSources/indicators';
import Chartoptions from '../uiSources/Chartoptions';
import '../../scss/playground.scss';
const BASE_URL = process.env.NODE_ENV === 'development' 
		? process.env.USE_BASE_URL_ENV
		: process.env.USE_BASE_URL;

const Playground = () => {
 
    
        return(

<React.Fragment>
<Helmet>
<title>VISUALIZE SDGs DATA IN AFRICA: Visualize SDGs data in Charts</title>
<meta name="description" content="Visualize SDGs data in charts on the 17 goals, 169 targets, and 232 indicators in all 54 African countries." />
<meta name="keywords" content="SDG, SDGs, Visualize, SDGs Data, 54 Countries in Africa, 169 targets, indicators,line chart, bar chart, polar chart" />
</Helmet>  

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
    
	 <div className="mobPadding" style={{marginTop:'40px'}}> </div> 

	<div className="indexPad" onClick={this._toggleHideYear}>
	
	<Indicators indicatortitle={`${indicator.indicator}`}/>
	
          <div>
	    <div className="locationBoxCont">
	      <img src={`${BASE_URL}shades/images/jloc.png`} />
	       <select className="locationBox" id="" onChange={this._queryCountry} defaultValue={country}>
		<option value="Nigeria">Nigeria</option>
	{
	countries.map((country,index) => (
	
	 <option key={index} value={country.value}>{country.value}</option>	   
	
	))	
		
	}
		</select>
	    </div>
	 </div>
 <div style={{position:'relative',width:'100%'}}>

{  noData ?
     <div className="noData">
        NO DATA
     </div> :''
}   
        <Chartoptions filtered={data} states={sortedStates} indicator={shortIndicator} country={country}/> 
	<div className="source">Source(s): {`${bearers}`} </div>
 

</div>
</div>
</React.Fragment>
    );
    
}

 
module.exports = Playground;