import React, {Component} from "react";
import path from 'path';
import '../../scss/report.scss';


class Methodology extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state = {
	  
	}; 
	    
        }

	

        render(){
		


        return(
<React.Fragment>

        <section className="methodBracer">
	  Methodology
	</section>
	<div className="Bracerr">
	<section className="methodologyCon">
	    	    
	    <h4>Computing the SDG Nigeria Index Scores</h4>
	    <h5>The procedure for calculating the SDG Nigeria Index comprised 6 steps: </h5>
	    <ol>
	      <li>
	        <strong>Raw data:</strong> Raw data for each of the priority Indicators were compiled for each State and at the national level.
		</li>
	      <li>
	        <strong>Rescaling:</strong> Rescale the data to ensure comparability across indicators and then aggregate the indicators within and across SDGs.</li>
	      <li>
	        <strong>Target setting:</strong> For each indicator, a national target value for 2030 has been set. This target value has been set in one of the three different ways (i) A quantifiable national target specified by the Government of Nigeria; (ii) A quantifiable UN SDG target specified under the UN SDGs for 2030; (iii) The average of the values of the top 3 performing States
		</li>
	      <li>
	        <strong>Normalising:</strong> To make data comparable across indicators, State data values of each of the Priority National Indicators was rescaled from its raw form into a score ranging from 0 to 100 -with 0 denoting lowest performer and 100 indicating that the target has been achieved.
		<p>
		For indicators where increasing value means better performance (Eg. Forest area coverage), score x' was computed as follows:
	        </p>
	        <p>
		In instances where States performed better than the target, their Index Score has been capped at 100.
	        </p>
	     </li>
	     <li>
	        <strong> SDG index score:</strong> For each of the Goals under the SDGs, SDG Nigeria Index score was computed for each State. This was calculated as the arithmetic mean of the normalised values of all the National Indicators within the Goal. In calculating the average, equal weights were assigned to each indicator and the arithmetic mean was rounded off to the nearest whole number.
		<br/>
		 Based on the SDG Nigeria Index, States were classified into 4 categories under each of the SDGs
		 <ol>
		   <li>
		     Achiever - when SDG India Index score is equal to 100
		     </li>
		   <li>
		     Top Rankers - when SDG India Index score is less than 100 but greater than or equal to 65
		     </li>
		   <li>
		     Highliners - when SDG India Index score is less than 65 but greater than or equal to 50
		     </li>
		    <li>
		     Beginners - when SDG India Index score is less than 50
		     </li>
		    
		</ol>
	    
	     </li>
	     <li>
	        <strong>Composite SDG Nigeria Index score:</strong> Every State's composite SDG Nigeria Index score was finally computed to quantify the overall progress of the States towards the SDGs. This was calculated as the arithmetic mean of the Goal scores across 13 out of the 17 Goals. This was done by assigning equal weight to every Goal score and the arithmetic mean was rounded off to the nearest whole number.
		<br/>
		  The arithmetic mean of Goal scores were then rounded off to the nearest whole number to give the composite SDG Nigeria Index score for each State. The States were again classified into the four categories (as described above): Achiever, Top Rankers, Highliner and Beginner
		
	     </li>
	      
	    </ol>
	    
	    
	    
	</section>
	</div>
</React.Fragment>  
    );
    }
    
}

module.exports = Methodology;