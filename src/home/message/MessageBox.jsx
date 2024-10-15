import ProfileThumb from '../../funtctionalComp/ProfileThumb';
const MessageBox = () =>{
    return(
        <>
            <div className='mssg-header w-100 d-flex justify-content-start p-2' style={{position: 'sticky', top: 70}}>
                <ProfileThumb/>
                <h2>Carshunters</h2>
            </div>
            <div className="col-12">
                <div className='col-12 d-flex justify-content-start'>
                    <div className='MssgLeft w-50 m-5 d-flex justify-content-evenly p-1'>
                    <ProfileThumb/>
                        <div className='mssgText shadow-lg w-75 rounded'>hello</div>
                    </div>
                </div>
                <div className='col-12 d-flex justify-content-end'>
                    <div className='MssgRight w-50 m-5 d-flex justify-content-evenly p-1'>
                    <div className='mssgText shadow-lg w-75 rounded'>hello</div>
                    <ProfileThumb/>
                    </div>                
                    </div>
            </div>
        </>
    )
}
export default MessageBox;