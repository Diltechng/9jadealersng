import Card from "../components/Card.component";
import { BsCollectionFill } from 'react-icons/bs';
const Latest = () =>{
    
        return(
            <>
            <h3 className='title w-100 text-dark p-2'>New <BsCollectionFill fill='#d33e10'/></h3>
                       <div className="container">
            <div className="row d-flex justify-content-center">
                <Card style={{height: '100 !important'}}/>

            </div>
        </div>
        
    
          </>
        );
}
export default Latest;