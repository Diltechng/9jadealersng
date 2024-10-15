import bikes from '../Categories/images/bikes.png';
import Car from '../Categories/images/car.png';
import autopart from '../Categories/images/autopart.png';
import exterior from '../Categories/images/exterior.png';
import interior from '../Categories/images/interior.png';
import house from '../Categories/images/house.png';
const EditorsCardList = ({monsters}) =>{
    /*const items = [
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
    <div className='d-flex flex-wrap justify-content-center'>
{items.map((item) =>{
    const {title, id, author, image} = item;
    return <div key={id} className='edt-card d-flex m-3 shadow-lg rounded'>
        <img
          src={image}
          alt={id}
        />
        <div className='edt-details w-100 text-light justify-content-center align-content-center'>
          <h3> {title}</h3>
          <p>{author}</p>
          </div>
      </div>
      })};
      </div>
    );*/
    return(
        <div className="d-flex flex-wrap justify-content-center">
        {monsters.map((monster)=>{
            const {name, email, id} = monster;
            return <div className="card p-3 shadow bg-light m-2 w-25" key={id}>
z            <h3 key={id}>{name}</h3>
            <h3 key = {id}>{email}</h3>
            </div>
        })}
    </div>
    )
}
export default EditorsCardList;
