import Sidebar from "../../hearders/Sidebar";
import SidebarLeft from "../../hearders/SidebarLeft"
import FriendCard from "./FriendCard";

const Friends = () =>{
    return(
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
            <Sidebar/>
                <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start">
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>

                </main>
                <SidebarLeft/>
            </div>
        </div>
    )
}
export default Friends