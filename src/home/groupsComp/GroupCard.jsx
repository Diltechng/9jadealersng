import logo from '../../hearders/images/fontlogo.png'

export const GroupCard = () =>{
    return(
        <div className='col-lg-5 col-md-7 col-sm-8 shadow-lg bg-secondary m-1 p-2'>
            <h2>
                Naijadealers Group
            </h2>
            <div>
                <img src={logo} alt='jj'/>
            </div>
            <button className='btn btn-light m-1'>View Group</button>
            <button className='btn btn-danger m-1'>Exit</button>
        </div>
    )
}