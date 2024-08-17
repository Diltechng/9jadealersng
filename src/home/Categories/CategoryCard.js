const CategoryCard =({monsters})=>{
    return(
        <div className="d-flex flex-wrap justify-content-center">
            {monsters.map((monster)=>{
                const {name, email, id} = monster;
                return <div className="card p-3 shadow bg-light m-2 w-25" key={id}>
                <img alt={`monsters $ {name}`} src={`https://robohash.org/${id}?set=set2`}/>
                <h3 key={id}>{name}</h3>
                <h3 key = {id}>{email}</h3>
                </div>
            })}
        </div>
    )
}
export default CategoryCard;