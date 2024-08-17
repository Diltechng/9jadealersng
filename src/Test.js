const Test = () =>{
    return(
    <div className="App">
    <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div style={{minHeight: 700}}>
  <div className="collapse collapse-horizontal" id="collapseWidthExample">
    <div className="card card-body" style={{width: 300}}>
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
    </div>
    )
}
export default Test;