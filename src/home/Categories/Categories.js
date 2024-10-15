import {Route, Routes} from 'react-router-dom'
import Categorymenu from './Categorymenu';
import CategoryItems from './CategoryItems';
const Categories = () =>{
 
  return (
    <>
        <Routes>
            <Route index element={<Categorymenu/>} />
            <Route path=":categoryId" element={<CategoryItems/>}/>
       </Routes>
      </>
      
  )
  
}
export default Categories