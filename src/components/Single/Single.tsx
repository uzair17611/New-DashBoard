import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Single.scss"


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const Single = () => {
  return (
    <div className="single">
       <div className="view">
        <div className="info">
            <div className="topInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHp18X5RHP5QyMmvKCMk1iQ5wiexmowc4v_cNQ_wZ9rzFJAKWHV9uFM8Mmr9s5E_flhCA&usqp=CAU" alt="" />
            <h1>john Doe</h1>
             <button>Update</button>
            </div>
            <div className="details">
                <div className="item">
                    <div className="itemTitle">UserName:</div>
                    <div className="itemValve">khan</div>
                </div>
                <div className="item">
                    <div className="itemTitle">UserName:</div>
                    <div className="itemValve">khan</div>
               
                </div>
            </div>
        </div>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
       </div>
       <div className="activities">
        <h2>Latest Activites</h2>
     <ul>
        <li>
            <p>John doe purchased a car with name robo</p>
            <span>3 days ago</span>
            
        </li>
        <li>
            <p>John doe purchased a car with name robo</p>
            <span>3 days ago</span>
            
        </li>
        <li>
            <p>John doe purchased a car with name robo</p>
            <span>3 days ago</span>
            
        </li>
     </ul>


       </div>
    </div>
  )
}

export default Single
