
const ItemSearch = ({onSearchange, placeHolder}) => {
    return(
        <>
                    <div className=' w-100 d-flex justify-content-center align-content-center' style={{position: "sticky", top: 1, zIndex: 10, appearance:'none'}}>
                    <input type='search' placeholder={placeHolder} className='form-control search  w-25' onChange={onSearchange}/>
                    </div>
        </>
    );
};
export default ItemSearch;