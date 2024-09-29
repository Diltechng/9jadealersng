import Car from './images/car.png';

const img =[
{
    image: Car,
    id: 1,
},
]
const ProfileThumb = () =>{
return(
    <>
    {img.map(({image, id})=>(
        <>
 <img className="rounded-circle" style={{width: 50, height: 50}} src={image} alt={id}/>
        </>
        
    ))}
    </>
)
}
export default ProfileThumb;