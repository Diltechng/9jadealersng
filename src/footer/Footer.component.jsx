import './footer.css';
import D from './D.png';
import { BsBuildingAdd, BsEnvelope, BsEnvelopePaper, BsFacebook, BsHouse, BsLightbulb, BsLinkedin, BsNewspaper, BsPalette, BsParagraph, BsPersonAdd, BsPersonFill, BsPhone, BsQuestion, BsSignDeadEnd, BsTelephone, BsWhatsapp, BsX } from 'react-icons/bs';
import { FcAdvertising, FcClapperboard, FcLibrary, FcPhone, FcReading, FcReadingEbook, FcRules, FcServices } from 'react-icons/fc';
const Footer = () =>{
    return(
    <footer className="footer w-100 text-dark d-flex" style={{backgroundImage: `url(${D})`}}>

        <div className='footer-box w-25 p-3 d-flex justify content-center'>
        <ul>
                <li className='footer-list'>Home <BsHouse/></li>
                <li className='footer-list'>Blog <BsNewspaper/></li>
                <li className='footer-list'>FAQ <BsQuestion/></li>
                <li className='footer-list'>About <BsPersonFill/></li>
            </ul>
        </div>
        <div className='footer-box w-25 p-3 d-flex justify-content-center'>
        <ul>
                <li className='footer-list'>Talk to us <BsTelephone/></li>
                <li className='footer-list'>Become a Dealer <BsPersonAdd/></li>
                <li className='footer-list'>Report Abuse/Scam <BsSignDeadEnd/></li>
                <li className='footer-list'>Ads<FcAdvertising/> </li>
            </ul>
        </div>
        <div className='footer-box w-25 p-3 d-flex justify-content-center'>
        <ul>
                <li className='footer-list'>Email <BsEnvelope/></li>
                <li className='footer-list'>Whatsapp <BsWhatsapp/></li>
                <li className='footer-list'>X <BsX/></li>
                <li className='footer-list'>Facebook <BsFacebook/></li>
                <li className='footer-list'>LinkedIn <BsLinkedin/></li>

            </ul>
        </div>
        <div className='footer-box w-25 p-3 d-flex justify-content-center'>
        <ul>
                <li className='footer-list'>Other Services <FcServices/></li>
                <li className='footer-list'>Build Your Own <BsBuildingAdd/></li>
                <li className='footer-list'>License <FcReading/></li>
                <li className='footer-list'>Terms of Use <FcReadingEbook/></li>
            </ul>
        </div>
        <div className='footer-box w-25 p-3 d-flex justify-content-center'>
        <ul>
                <li className='footer-list'>Rules <FcRules/></li>
                <li className='footer-list'>Advice <BsLightbulb/></li>
                <li className='footer-list'>Useful Contacts <FcPhone/></li>
                <li className='footer-list'>LearnMore <FcLibrary/></li>
            </ul>
        </div>

       

        </footer>
    )
}
export default Footer;