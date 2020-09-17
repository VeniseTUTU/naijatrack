import React, {useState,Component,Fragment} from "react";
import { NavLink, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import AOS from 'aos';
import '../../dist/aos.css';
import '../../scss/home.scss';
const BASE_URL = process.env.NODE_ENV === 'development' 
				 ? process.env.USE_BASE_URL_ENV
				 : process.env.USE_BASE_URL;
AOS.init();

const Home = () => {

const nameValue = (arr) => {
const nameVal = [];
for(let i=1; i<=arr.length; i++){
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const resultArr = arr[i - 1].split('');
  console.log(resultArr);
  const res = resultArr.map(result => alphabets.indexOf(result) + 1)
  .reduce((a,b) => a+b) * i;
 nameVal.push(res);
}
return nameVal;
}
const arr = ['abc','abcabc']; //[6,24]
//console.log(nameValue(arr));

return(

<Fragment>

<Helmet>
<title>SJINET.COM</title>
</Helmet>

<div className="Home__Context">
	<div className="Home__Context__Logo">Naija<span>Track</span></div>
	<Link to="/visualize"> 
	<button className="Home__Context__VisButton ">Visualize Data</button>
	</Link>
	<Link to="/report"> 
	<button className="Home__Context__RepButton">Explore Report</button>
	</Link>
</div>

<div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage: `url('${BASE_URL}images/waves/wave-top.png')`}}>
	
	</div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: `url('${BASE_URL}images/waves/wave-mid.png')`}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage: `url('${BASE_URL}images/waves/wave-bot.png')`}}></div>
  </div>
</div>
  </Fragment>
			);
		  
		}

export default Home;



