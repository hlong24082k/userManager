import FeaturedInfo from '../../components/featurnedInfo/FeaturedInfo';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import'./home.css';

export default function Home() {
  return (
  <>
    <Topbar/>
    <div className='container'>
      <Sidebar/>
      <div className='home'>
          <FeaturedInfo />
      </div>
    </div>
  </>
    
  )
}
