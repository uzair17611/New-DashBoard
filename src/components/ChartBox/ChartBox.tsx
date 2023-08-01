import React from 'react'
import './ChartBox.scss'
import { Link } from 'react-router-dom'
import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

type Props ={
    color:string;
    icon:string;
    title:string;
    dataKey:string;
    number :string |number;
    percentage :number;
    chartData : object []

}


const ChartBox = (props:Props) => {
  return (
    <div className='Chartbox'>
      <div className="boxinfo">
        <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link  to='' style={{color:props.color}}>
        view all
        </Link>


      </div>
      <div className="chartinfo">
        <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        
        <LineChart  data={props.chartData} >
        <Tooltip  contentStyle={{background:"transparent" ,border:"none" } }labelStyle={{display:"none"}}  position={{x:10 , y:60}}/>
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="texts">
        <span  className='Percentage' style={{color:props.percentage< 0 ? "tomato" :"limegreen"}}> {props.percentage}</span>
        <span  className='duration'>this month</span>
      </div>
      </div>
    </div>
  )
}

export default ChartBox
