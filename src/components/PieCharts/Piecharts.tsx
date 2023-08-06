import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import "./Piecharts.scss"
const data = [
  { name: 'Group A', value: 400, color: '#0088FE' },
  { name: 'Group B', value: 300, color: '#00C49F' },
  { name: 'Group C', value: 300, color: '#FFBB28' },
  { name: 'Group D', value: 200, color: '#FF8042' },
];

const Piecharts = () => {
  return (
    <div className="piChartsBoc">
        <h1>Lead by source</h1>
      <div className="charts">
        <ResponsiveContainer  width="99%" height={300}>
          <PieChart >
        <Tooltip
        contentStyle={{background:"white"  ,borderRadius:"5px"}}
        
        />
            <Pie
              data={data}
             
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color}/>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item)=>(
                <div className="option"  key={item.name}>
                  <div className="title">
                 <div className="dot"  style={{backgroundColor:item.color}}/>
                 <span>{item.name}</span>
                  </div>
                  <span>{item.value}</span>
                </div>
        )

        )}

      </div>
    </div>
  );
};

export default Piecharts;
