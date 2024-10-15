const Itemlist = ({Category}) =>{
return(
    <div className="d-flex flex-wrap justify-content-center">
    {Category.map((cat)=>{
        const {id, items, Category} = cat;
        return <div className="card p-3 shadow bg-light m-2 w-100" key={id}>
        <h3 key = {id}>{Category}</h3>
        </div>
    })}
</div>
)
}
export default Itemlist;