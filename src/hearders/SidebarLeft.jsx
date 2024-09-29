import useDeviceType from '../Hooks/Devicewidthhook';
import ItemSearch from '../searchbox/ItemSearch';
const SidebarLeft = () =>{
    const {isDesktop} = useDeviceType();
    return(
        <>
        {isDesktop &&
            <aside className="col-3" style={{borderLeft: '0.5px solid #00000036'}}>
            <div className="position-sticky" style={{top:95}}> 
            <ItemSearch/>
  </div>
            </aside>
            }
            </>
        )
}
export default SidebarLeft;