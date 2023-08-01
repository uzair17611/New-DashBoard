
import './Home.scss'
import Topbox from '../../components/box/Topbox'
import ChartBox from '../../components/ChartBox/ChartBox'
const Home = () => {
  return (
    <div className='home'>
       <div className="box box1"><Topbox/></div>
       <div className="box box2"><ChartBox/></div>
       <div className="box box3"><ChartBox/></div>
       <div className="box box4"></div>
       <div className="box box5"><ChartBox/></div>
       <div className="box box6"><ChartBox/></div>
       <div className="box box7"></div>
       <div className="box box8"></div> 
        <div className="box box9">box9</div>
    </div>
  )
}

export default Home
