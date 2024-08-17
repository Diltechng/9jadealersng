import Navbar from "./hearders/Navbar.component"
import Sidebar from "./hearders/Sidebar"

export const Layout =() =>{
    return(
    <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar/>
            </div>
        </div>
     </>
    )
}