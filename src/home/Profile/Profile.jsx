import {useSignout}  from "../../components/Auth/Signout";
import ProfileThumb from "../../funtctionalComp/ProfileThumb";
export const Profile = () =>{
    const {handleSignOut} = useSignout();
    return(
        
        <div className='container-fluid'>
            <div className='row'>
                <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start">
                <div className='w-100'>
                    <div className='col-lg-5 col-md-5 col-sm-8 bg-secondary shadow-lg p-2'>
                    <ProfileThumb/>
                    <label className='w-100 text-light bold'>CarsHunters</label>
                    <div>Plan: VIP</div>
                    </div>
                    </div>
                    <button className='btn btn-danger' onClick={handleSignOut}> Sign Out</button>
                </main>
            </div>
        </div>
    )
}