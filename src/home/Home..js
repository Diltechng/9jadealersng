import Sidebar from '../hearders/Sidebar';
import Search from '../searchbox/Search';
import useActionbox from './Actionbox';
import { BsBarChartFill, BsCollection, BsColumnsGap, BsFillChatFill, BsFire, BsPeopleFill, BsStars } from 'react-icons/bs';
const Home =()=>{
    const {renderPage, setCurrentBox} = useActionbox()
    return(
        
        <div className="container-fluid">
      <div className="row flex-nowrap">
          <Sidebar/>
          <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
                  <div className="w-100 d-flex justify-content-center">
        <div className='container search-container rounded w-100 shadow-lg m-3 p-2 d-flex justify-content-center align-items-center flex-wrap'>
        <div className='d-flex w-100 justify-content-end'>
        <button className='prim-btn-search text-light m-1 btn shadow'>Ask a Dealer! <BsFillChatFill /></button>
        <button className='prim-btn-search text-light m-1 btn shadow'>Become a Dealer! <BsFillChatFill /></button>
  
        </div>
        <h3 className='w-100 text-light'>What Are You Looking For?</h3>
          <Search/>
          <div className='w-100 d-flex p-1 justify-content-center align-content-center'>
          <button className='icon-container-rounded d-flex m-1' onClick={() =>setCurrentBox('Latest')}>
            <span className='w-100 p-1'><span className='circle-icon bg-light'><BsCollection size={20} fill='#b30000'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Just For You</label>
            </button>
          <button className='icon-container-rounded d-flex m-1' onClick={()=> setCurrentBox('Editor')}>
            <span className='w-100 p-1'><span className='circle-icon bg-light'><BsStars size={20} fill='#b30000'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Editors Picks</label>
            </button>
            <button className='icon-container-rounded d-flex m-1' onClick={()=> setCurrentBox('Categories')}>
            <span className='w-100 p-1 text-light'><span className='circle-icon bg-light'><BsColumnsGap size={20} fill='rgb(25 137 85)'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Categories</label>
            </button>
            <button className='icon-container-rounded d-flex m-1' onClick={()=> setCurrentBox('Trending')}>
            <span className='w-100 p-1'><span className='circle-icon bg-light'><BsBarChartFill size={20} fill='#2e65b5'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Trending</label>
            </button>
            <button className='icon-container-rounded d-flex m-1' onClick={()=> setCurrentBox('Groups')}>
            <span className='w-100 p-1'><span className='circle-icon bg-light'><BsPeopleFill size={20} fill='#440496'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Groups</label>
            </button>
            <button className='icon-container-rounded d-flex m-1' onClick={()=> setCurrentBox('Distress')}>
            <span className='w-100 p-1'><span className='circle-icon bg-light'><BsFire size={20} fill='#ffc107'/></span>
            </span>
            <label className='w-100 m-1 p-1 text-light' style={{fontWeight: 900}}>Distress</label>
            </button>
          </div>
        </div>
        </div>
        {renderPage()}
          </main>
      </div>
  </div>
    );
}
export default Home;