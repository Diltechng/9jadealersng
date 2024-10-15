import logo from '../../hearders/images/fontlogo.png'
const FriendCard = () =>{
    return(
        <div className='col-lg-5 col-md-7 col-sm-8 shadow-lg bg-secondary m-1 p-2'>
            <h2>
                Naijadealers
            </h2>
            <div>
                <img src={logo} alt='jj'/>
            </div>
            <button className='btn btn-light m-1'>View Profile</button>
            <button className='btn btn-light m-1'>Add Friend</button>
        </div>
    )
}
export default FriendCard;