import useDeviceType from '../Hooks/Devicewidthhook';
import Footer from '../footer/Footer.component';
import Sidebar from '../hearders/Sidebar';
import Search from '../searchbox/Search';
import useActionbox from './Actionbox';
import { BsBarChartFill, BsCollection, BsColumnsGap, BsFillChatFill, BsFire, BsPeopleFill, BsStars } from 'react-icons/bs';
import Addpost from './AddPost/Addpost';
import SidebarLeft from '../hearders/SidebarLeft';
const Home =()=>{
    const {renderPage, setCurrentBox} = useActionbox();
    const {isMobile, isTablet, isDesktop} = useDeviceType();
    const boxBtn = [
      {
        index: 1,
        icon: <BsCollection size={20} />,
        text: 'Latest',
        click: () =>setCurrentBox('Latest')
      },
      {
        index: 2,
        icon: <BsStars size={20} fill='#b30000'/>,
        text: 'Favourites',
        click: () =>setCurrentBox('Editor')
      },
      {
        index: 3,
        icon: <BsColumnsGap size={20} fill='rgb(25 137 85)'/>,
        text: 'Categories',
        click: () =>setCurrentBox('Categories')
      },
      {
        index: 4,
        icon: <BsBarChartFill size={20} fill='#2e65b5'/>,
        text: 'Trending',
        click: () =>setCurrentBox('Trending')
      },
      {
        index: 5,
        icon: <BsPeopleFill size={20} fill='#440496'/>,
        text: 'Trending',
        click: () =>setCurrentBox('Groups')
      },
      {
        index: 6,
        icon: <BsFire size={20} fill='#ffc107'/>,
        text: 'Distress',
        click: () =>setCurrentBox('Distress')
      },
    ]
    return(
        <>
        <div className="container-fluid">
      <div className="row flex-nowrap">
          <Sidebar/>
          <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start">
                  <div className="w-100 d-flex justify-content-center">
        <div className='container header-container rounded w-100 shadow-lg m-3 p-2 d-flex justify-content-center align-items-center flex-wrap'>
        <div className='d-flex w-100 justify-content-end'>
        <button className='prim-btn-search text-light m-1 btn shadow'>Ask a Dealer! <BsFillChatFill /></button>
        <button className='prim-btn-search text-light m-1 btn shadow'>Become a Dealer! <BsFillChatFill /></button>
  
        </div>
        {(isDesktop || isTablet) &&
        <>
        <h3 className='w-100 text-light'>An Endless Scroll of The Best Deals</h3>
          </>
        }
          <div className='row flex-nowrap w-100 p-3 justify-content-start align-items-center' style={{overflowY:'auto'}}>
          {boxBtn.map(({index, icon, text, click})=>{
            return (
              <button key={index} className='col icon-container-rounded d-flex m-1 w-100' onClick={click}>
            <span className='w-100 p-1 d-flex h-100 justify-content-center'><span className='circle-icon bg-light'>{icon}</span>
            </span>
            <label className='w-100 m-1 p-1 text-light d-grid' style={{fontWeight: 900, fontSize:10}}>{text}</label>
            </button>)
          })}
          </div>
        </div>
        </div>
        {renderPage()}
          </main>
          <SidebarLeft/>
      </div>
  </div>
  <Addpost/>
  {isMobile &&
    <Footer/>
    }
    </>
    );
}
export default Home;