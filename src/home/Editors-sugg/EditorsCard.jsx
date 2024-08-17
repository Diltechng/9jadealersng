import './editors-sugg.style.css';
import {  BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsStars } from "react-icons/bs";
import bikes from '../Categories/images/bikes.png';
import Car from '../Categories/images/car.png';
import autopart from '../Categories/images/autopart.png';
import exterior from '../Categories/images/exterior.png';
import interior from '../Categories/images/interior.png';
import house from '../Categories/images/house.png';
import useScroll from '../Scroll';

const ITEM_WIDTH = 500;
const EditorsCard = () =>{
    const {handleScroll, containerRef} = useScroll();
    const Details = [
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon',
            image: Car

        },
        {
            id: 2,
            title: 'Audi',
            author: 'young jhon',
            image: autopart
        },
        {
            id: 3,
            title: 'Audi',
            author: 'young jhon',
            image: exterior
        },
        {
            id: 4,
            title: 'Audi',
            author: 'young jhon',
            image: house
        },
        {
            id: 5,
            title: 'Audi',
            author: 'young jhon',
            image: bikes

        },
        {
            id: 6,
            title: 'Audi',
            author: 'young jhon',
            image: interior

        }
    ];
    return(
        <>
        <h3 className='title w-100 text-dark p-2'>Editors Favourite <BsStars fill='red'/></h3>
         <a href='www.example.com' className='w-100 d-flex justify-content-end p-1 text-success'>View More</a>
        <div className='edt-suggestions d-flex flex-nowrap p-3 position-relative' ref={containerRef} >
       <div className='scroll-icon d-flex align-items-center text-light position-sticky rounded-circle start-0'><BsFillArrowLeftCircleFill className='btn text-light' onClick={() =>{handleScroll(-ITEM_WIDTH)}} size={70}  /></div> 
<div className='d-flex flex-nowrap' id="slider">
  {Details.map(({title, id, author, image}) =>(
        <div key={id} className='edt-card d-flex w-100 m-3 shadow-lg rounded'>
          <img
            src={image}
            alt={id}
          />
          <div className='edt-details w-100 text-light'>
            <h3> {title}</h3>
            <p>{author}</p>
            </div>
        </div>
        ))};
        </div>
        <div className='scroll-icon d-flex align-items-center text-light position-sticky rounded-circle'style={{right: 30}} ><BsFillArrowRightCircleFill className='btn text-light' onClick={() =>{handleScroll(ITEM_WIDTH)}}  size={70} /></div>
  </div>

      </>
    )
}


export default EditorsCard;