import logo from '../../hearders/images/fontlogo.png'

export const GroupCard = () =>{
    return(
        <div className='col-lg-3 col-md-4 col-sm-5 m-1 shadow-lg bg-secondary mb-5 p-2'>
            <label className='text-light bold'>
                Naijadealers Group
            </label>
            <div className='w-100'>
                <img src={logo} alt='jj' style={{width:'50%', ObjectFit:'cover'}}/>
            </div>
            <button className='btn btn-light m-1'>View Group</button>
            <button className='btn btn-danger m-1'>Exit</button>
        </div>
    )
}