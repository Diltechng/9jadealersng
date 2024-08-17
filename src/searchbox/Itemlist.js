const Itemlist = ({items}) =>{
return(
    <div className="d-flex flex-wrap justify-content-center">
                {items.map((item)=>{
                    const {name, email, id} = item;
                    return <div className="card p-3 shadow bg-light m-2 w-25" key={id}>
                    <img alt={`monsters $ {name}`} src={`https://robohash.org/${id}?set=set2`}/>
                    <h3 key={id}>{name}</h3>
                    <h3 key = {id}>{email}</h3>
                    </div>
                })}
            </div>
)
}
export default Itemlist;