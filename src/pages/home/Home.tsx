
import './Home.scss'
import Topbox from '../../components/box/Topbox'
import ChartBox from '../../components/ChartBox/ChartBox'
import { chartBoxProduct } from '../../data'
import { chartBoxConversion } from '../../data'
import { chartBoxRevenue } from '../../data'
import { chartBoxUser } from '../../data'
import BarCharts from '../../components/Barcharts/BarCharts'
import { barChartBoxRevenue } from '../../data'




const Home = () => {
  return (
    <div className='home'>
       <div className="box box1"><Topbox/></div>
       <div className="box box2"><ChartBox {...chartBoxConversion}/></div>
       <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
       <div className="box box4"></div>
       <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
       <div className="box box6"><ChartBox {...chartBoxUser}/></div>
       <div className="box box7"></div>
       <div className="box box8"><BarCharts {...barChartBoxRevenue}/></div> 
        <div className="box box9"><BarCharts {...chartBoxConversion}/></div>
    </div>
  )
}

export default Home
