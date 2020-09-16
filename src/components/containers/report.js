import React, {Component,Fragment} from "react";
import { NavLink, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; 
import '../../scss/report.scss';
import '../../scss/performance.scss';
import Category from '../uiSources/percategory';
import Staterank from '../uiSources/staterank';
import Statemap from '../uiSources/statemap';
import Subnational from '../uiSources/subnational';
import Stateperformance from '../uiSources/stateperformance';
import Subnationalperformance from '../uiSources/subnationalperformance';
import Methodology from '../uiSources/methodology';
import {ReportProvider} from '../../components/providers';


const Report = (props) => { 

  return(

<Fragment>
<Helmet>
<title>SDGs DATA REPORT IN AFRICA: Report on Country Level SDGs in Africa</title>
<meta name="description" content="View report in standard dashboard on the SDGs at country level in Africa. The tracking tool uses rank charts and traffic lights representations to better present countries performance in achieving the SDGs in 2030, thus helping governments to better plan and prioritize towards a better future." />
<meta name="keywords" content="SDG, SDGs, tracking, Cafsed data, Cafsed, tracking tool, traffic lights chart, performance, achieve, prioritize, visualize, SDGs Data, report, 169 targets, indicators, line chart, bar chart, polar, SDG for a better future, SDG Goals chart, global goals " />
</Helmet>  
<ReportProvider>
  {({Input,data,countries,regionaldata,indicator,showReportTab,selectMultipleOption}) => ( 
 <>     
<div className="mobPadding" style={{marginTop:'40px'}}> </div>

<section className="Bracerr">
       
 <div className="selecTContry">
  <Picky
    className='cuspicky'
    options={countries}
    value={Input.country}
    onChange={selectMultipleOption}
    valueKey="value"
    labelKey="label"
    includeFilter={true}
    
  />
       </div>
       <div className="emptyDat" >
  {  Input.noData && (
       <div className="noDataRep">
          NO DATA
       </div>
       )
  }
  </div>
      </section>
  { !Input.noData && (
  <>
       <section className="Bracerr">
       <section className="TitleMcon">
       
       <div className="TitleContt" onClick={() => (showReportTab('Ranking'))} >Ranking</div>
       <div className="TitleContt" onClick={() => (showReportTab('Performance'))} style={{backgroundColor:"#d6d6d6"}}>Performance</div>
       
       </section>
       </section>
       
       <section className="Bracerr">
          
       {  Input.reportTab == 'Ranking' ?
          <> 
     <Statemap filtered={data}/>
     <Category filtered={data} />
           <Staterank filtered={data}/>
     <Subnational filtered={regionaldata}/> </> : ''
    
       }
       {  Input.reportTab == 'Performance' ?
          <>
      <Stateperformance filtered={data}/>
      <Subnationalperformance filtered={regionaldata}/> </> :''
    
       }  
       </section>
       
       <Methodology />
  </>
       )
  }
  
</>
  )}
</ReportProvider>

</Fragment>


    
    );
    
    
}

export default Report;