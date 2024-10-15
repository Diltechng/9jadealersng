import {useParams} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import {CategoriesContext} from '../../context/Categories.context';
import Card from '../../components/Card.component';
import Sidebar from '../../hearders/Sidebar';
import SidebarLeft from '../../hearders/SidebarLeft';

const CategoryItems =()=>{
   const {categoryId} = useParams();
   const { categoriesMap } = useContext(CategoriesContext);
       const [products, setProducts] = useState([]);
   useEffect(()=>{
    const foundCategory = categoriesMap.find(cat => cat.Category.toLowerCase() === categoryId.toLowerCase()) || null;
    console.log(foundCategory)
       setProducts(foundCategory);
    }, [categoriesMap, categoryId])
    console.log(products)
    return(
        <>
        <div className='container-fluid'>
        <div className='row flex-nowrap'>
        <Sidebar/>
          <main className='col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start'>
          {products ? (
          <>
            <h2 className='w-100 text-secondary'>{products.Category}</h2>
            <>
            {products.items && 
            products.items.map((item) => (
                      <Card key={item.id} category={products} item={item}/>  // Assuming Card component takes item as a prop
                    ))}</>
          </>
                  ) : (
                    <p>No products found for this category</p>
                  )}
          </main>
          <SidebarLeft/>
        </div>
        </div>
    </>
           
    )

}
export default CategoryItems;