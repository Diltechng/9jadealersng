import {useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import {BsSearch, BsArrowLeft} from 'react-icons/bs';
import useSearch from '../Hooks/Searchhook';
import EditorsCardList from '../home/Editors-sugg/EdittorsCardList';
import useDeviceType from '../Hooks/Devicewidthhook';
import './search.css';
const ItemSearch = (monsters) => {
    const [show, setShow] = useState(false);
     const {isMobile, isDesktop, isTablet} = useDeviceType()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const {filteredMonsters, onSearch, setMonsters} = useSearch()
    useEffect(()=>{
        try{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((Res) => Res.json())
            .then((users) => setMonsters(users))
        }
        catch{
            console.error()
        }
    },[])
    return(
        <>
                {(isMobile || isTablet) &&
                <BsSearch size={20} fill={'green'} onClick={handleShow}/>
                }
                {(isDesktop) && 
                <button className="btn  border w-100 position-sticky" style={{textAlign:'start'}} onClick={handleShow}>Search</button>
                }
                   
                    <Modal show={show} onHide={() =>setShow(false)}>
                    <span onClick={handleClose}><BsArrowLeft size={25}/></span>
          <Modal.Header>
          <div className=' w-100 d-flex justify-content-center align-content-center'>
                    <input type='search' placeholder='search' className='form-control search  w-100' onChange={onSearch}/>
                    </div>
        </Modal.Header>
        <Modal.Body>

        <EditorsCardList monsters={filteredMonsters}/>
           
        
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap">
            
            
        </Modal.Footer>
      </Modal>
        </>
    );
};
export default ItemSearch;