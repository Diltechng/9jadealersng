import { 
    FaWhatsapp, 
    FaInstagram, 
    FaFacebookF, 
    FaLinkedin, 
    FaGithub, 
    FaDiscord, 
    FaTiktok, 
    FaYoutube, 
     } from "react-icons/fa";
     import {Link} from 'react-router-dom';
     import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "./hearders/Sidebar";

const ContactUs = () =>{

    return(
        <>
        <div className="container-fluid">
        <div className="row flex-wrap">
        <Sidebar/>
        <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
        <div className="container">
            <div className="row">
            <label className="label text-secodary m-1 w-100">Connect With Us...</label>
        <div className="col-12 shadow-lg">
                    <Link to="#" className="col-4 mb-3 " data-bs-parent="#sidebar"><span><FaXTwitter fill="black" size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"> <span><FaFacebookF fill="blue" size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"><span><FaWhatsapp fill="green" size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"> <span><FaInstagram fill="red" size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"> <span><FaLinkedin fill="skyblue" size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"><span><FaGithub size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"> <span><FaDiscord size={25}/></span></Link>
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"><span><FaTiktok size={25}/></span></Link>                    
                    <Link to="#" className="col-4 mb-3" data-bs-parent="#sidebar"><span><FaYoutube fill="red" size={25}/></span></Link>
                    </div>
            </div>
        </div>
       
                    </main>
                    </div>
                    </div>
                    </>
    )
}
export default ContactUs;