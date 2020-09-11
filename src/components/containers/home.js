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

const [overlayLoginForm,setOverlayLoginForm] = useState(false); 

return(

<Fragment>

<Helmet>
<title>SJINET.COM</title>
</Helmet>

 <div className="indexPad">
    <Link to="/visualize"> 
	    <button>Visualize</button>
		</Link>
    <Link to="/report"> 
	    <button>Report</button>
		</Link>
  </div>
     
	
	</Fragment>
			);
		  
		}

export default Home;



