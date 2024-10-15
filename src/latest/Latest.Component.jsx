import Card from "../components/Card.component";
import { BsCollectionFill } from 'react-icons/bs';
import {useContext, Fragment} from 'react';
import { CategoriesContext } from "../context/Categories.context";
const Latest = () =>{
    const {categoriesMap} = useContext(CategoriesContext);
        return(
            <>
            <h3 className='title w-100 text-dark p-2'>New <BsCollectionFill fill='#d33e10'/></h3>
                       <div className="container">
            <div className="row d-flex justify-content-center">
            
            {categoriesMap.map((categories)=>{
              const {items, id} = categories;
              return(
                <Card category={categories} item={items}/>
              )
            })}
            </div>
        </div>
        
    
          </>
        );
}
export default Latest;