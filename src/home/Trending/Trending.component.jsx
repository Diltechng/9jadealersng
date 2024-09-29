import {BsBarChartFill} from "react-icons/bs";
import bikes from './images/bikes.png';
import Car from './images/car.png';
import autopart from './images/autopart.png';
import exterior from './images/exterior.png';
import interior from './images/interior.png';
import house from './images/house.png';
import Card from "../../components/Card.component";
const Trending = () =>{
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
    
            },
            {
                id: 7,
                title: 'Audi',
                author: 'young jhon',
                image: interior
    
            },
            {
                id: 8,
                title: 'Audi',
                author: 'young jhon',
                image: interior
    
            },
            {
                id: 9,
                title: 'Audi',
                author: 'young jhon',
                image: interior
    
            },
            {
                id:10,
                title: 'Audi',
                author: 'young jhon',
                image: interior
    
            },
            {
                id: 11,
                title: 'Audi',
                author: 'young jhon',
                image: interior
    
            },
        ];
        return(
            <>
         <h3 className='title w-100 text-dark p-2'>Trending <BsBarChartFill size={20} fill='#2e65b5'/></h3>
             <a href='www.example.com' className='w-100 d-flex justify-content-end p-1 text-success'>View More</a>
            <div className='container'>
    <div className='row'>
      <Card/>
            </div>
            <div className='d-flex justify-content-center w-100'>
            </div>
      </div>
    
          </>
        );
}
   
        
export default Trending;