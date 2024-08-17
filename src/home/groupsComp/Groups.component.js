import {BsPeopleFill} from "react-icons/bs";
import bikes from './images/bikes.png';
import Car from './images/car.png';
import autopart from './images/autopart.png';
import exterior from './images/exterior.png';
import interior from './images/interior.png';
import house from './images/house.png';
const Groups = () =>{
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
         <h3 className='title w-100 text-dark p-2'>Groups <BsPeopleFill size={20} fill='#440496'/></h3>
             <a href='www.example.com' className='w-100 d-flex justify-content-end p-1 text-success'>Add Group</a>
            <div className='d-flex flex-wrap p-3'>
    <div className='d-flex flex-wrap justify-content-center'>
      {Details.map(({title, id, author, image}) =>(
            <div key={id} className='edt-card d-flex m-3 shadow-lg rounded'>
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
            <div className='d-flex justify-content-center w-100'>
            </div>
      </div>
    
          </>
        );
}
   
        
export default Groups;