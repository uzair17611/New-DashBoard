import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Single.scss"

type Props= {
    id :number;
    img ?:string;
    title:string;
    info:object;
    chart?:{
        dataKeys:{name:string , color:string}[];
        data:object[]
    }

    activities:{time :string , text :string}[]

}

const Single = (props:Props) => {
  return (
    <div className="single">
       <div className="view">
        <div className="info">
            <div className="topInfo">
           {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
             <button>Update</button>
            </div>
            <div className="details">
                { Object.entries(props.info).map((item) => (
                    <div className="item">
                    <div className="itemTitle">{item[0]}</div>
                    <div className="itemValve">{item[1]}</div>
                </div>
                ))}
                
            </div>
        </div>
        {props.chart && <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={props.chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {props.chart.dataKeys.map((datakey)=>(
           <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} activeDot={{ r: 8 }} />
          ))
          }
         
        </LineChart>
      </ResponsiveContainer>
        </div>}
       </div>
       {props.activities && <div className="activities">
        <h2>Latest Activites</h2>
     <ul>
        {props.activities.map((activity)=>(
        
        <li>
            <div>
            <p>{activity.text}</p>
            <span>{activity.time}</span>
            </div>
        </li>

        )) }
        
        
     </ul>


       </div>}
    </div>
  )
}

export default Single
