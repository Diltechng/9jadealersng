
import car from './images/car.png';
import house from './images/house.png';
import autopart from './images/autopart.png';
import bikes from './images/bikes.png';
import interior from './images/interior.png';
import exterior from './images/exterior.png';
import './category.style.css';
import { BsColumnsGap, BsFile, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import useScroll from '../Scroll';
const ITEM_WIDTH = 500;
const Categories = () =>{
  const {handleScroll, containerRef} = useScroll()
  const cat = [
    {
      id : 1,
      title: 'Automobile',
      image: car
    },
    {
      id: 2,
      title: 'Bikes',
      image: bikes
    },
    {
      id: 3,
      title: 'Auto Part',
      image: autopart
    },
    {
      id: 4,
      title: 'Real Estate',
      image: house
    },
    {
      id: 5,
      title: 'House Interior',
      image: interior
    },
    {
      id: 6,
      title: 'House Exterior',
      image: exterior
    }
  ]
  return (
    <>
      
        <h3 className='title w-100 text-dark p-2'> <label>Top Categories</label> <BsColumnsGap fill='rgb(25 137 85)'/></h3>
         <a href='#' className='w-100 d-flex justify-content-end p-1 text-success'>View All</a>
        <div className='categories d-flex flex-nowrap p-3 position-relative' ref={containerRef} >
       <div className='scroll-icon d-flex align-items-center text-light position-sticky rounded-circle start-0'><BsFillArrowLeftCircleFill className='btn text-light' onClick={() =>{handleScroll(-ITEM_WIDTH)}} size={70}  /></div> 
<div className='d-flex flex-nowrap' id="slider">
{cat.map(({title, id, image })=>(
        <div key={id} className='edt-card d-flex w-100 m-3 shadow-lg rounded'>
          <img
            src={image}
            alt={title}
          />
          <div className='edt-details w-100 text-light'>
            <h3> {title}</h3>
            </div>
        </div>
        ))};
        </div>
        <div className='scroll-icon d-flex align-items-center text-light position-sticky rounded-circle end-0' ><BsFillArrowRightCircleFill className='btn text-light' onClick={() =>{handleScroll(ITEM_WIDTH)}}  size={70} /></div>
  </div>

      </>
      
  )
  
}
export default Categories