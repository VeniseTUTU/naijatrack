import React, {Component} from "react";
import '../../scss/loading.scss';
const BASE_URL = process.env.USE_BASE_URL; 


 export default class Loader extends React.Component {
        
	    state = {
		
	    overlayLoginForm: false,  
	    
	    }
	     
		render(){


		return(

<React.Fragment>
<div className="loaderr">
<div className="loaderr__content"></div>
</div>

</React.Fragment>
			);
		  }
		}
        


