import MessageBox from './MessageBox';
import MessageSidebar from './MessageSidebar';
const Message = () =>{
    return(
            <div className='container-fluid'>
                <div className='row flex-nowrap'>
                <MessageSidebar/>
                    <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center align-content-start">
                        <MessageBox/>
                    </main>
                </div>
            </div>
    )
}
export default Message