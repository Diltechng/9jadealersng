import {Link} from 'react-router-dom'
import {BsHouse} from 'react-icons/bs'
const Sidebar = () =>{
    return(
        <div className="col-auto px-0">
            <div id="sidebar" className=" collapse collapse-horizontal show border-end h-100" style={{transition: "0.1s ease"}}>
                <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start sticky-top sticky-bottom" style={{top:90}}>
                <div className='list-group w-100'>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <BsHouse fill='red' size={20}/><span>Home</span> </Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    </div>

                    <div className='list-groupw-100'>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <BsHouse fill='red' size={20}/><span>Home</span> </Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"> <span>Item</span></Link>
                    <Link to="#" className="list-group-item border-end-0 d-inline-block text-truncate text-center" data-bs-parent="#sidebar"><span>Item</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;