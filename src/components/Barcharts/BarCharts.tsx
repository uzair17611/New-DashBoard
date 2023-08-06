import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Barcharts.scss"



type Props={
   title:string;
   color:string;
   dataKey:string;
   chartData:object[]
}
const BarCharts = (props:Props) => {


  return (
    
      <div className="barchartbox">
         <h1>{props.title}</h1>

         <div className="charts">
         <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"#2a3447" ,borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}

            >


            </Tooltip>
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
         </div>
 

      </div>

  )
}

export default BarCharts
