import Sidebar from "../../hearders/Sidebar";
import SidebarLeft from "../../hearders/SidebarLeft";
import { CreateGroup } from "./CreateGroup";
import { GroupCard } from "./GroupCard"

const Groups = () =>{
    return(
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
            <Sidebar/>
                <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start">
                    <div className='title w-100'>Your Groups</div>
                    <CreateGroup/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                </main>
            <SidebarLeft/>
            </div>
        </div>
    )
}
export default Groups