import car from "./Categories/images/car.png";
import Sidebar from "../hearders/Sidebar";
import "./single.css";

const Single = () =>{
return(
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <Sidebar/>
        <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
                <div className="w-75 p-3 d-flex justify-content-center">
      <div className="col-6 w-75 d-flex flex-wrap justify-content-center">
        <div className= "productImg shadow-lg w-100 h-75"><img className=" rounded h-100 w-100" src={car} alt = "car"/></div>
        <div className="w-100 h-25 shadow-lg d-flex flex-nowrap p-2 m-3">
        <div className="productImg w-25 h-100 p-2 m-1"><img className="rounded h-100 w-100" src={car} alt = "car"/></div>
        <div className="productImg w-25 h-100 p-2 m-1"><img className="rounded h-100 w-100" src={car} alt = "car"/></div>
        <div className="productImg w-25 h-100 p-2 m-1"><img className="rounded h-100 w-100" src={car} alt = "car"/></div>
        <div className="productImg w-25 h-100 p-2 m-1"><img className="rounded h-100 w-100" src={car} alt = "car"/></div>
        </div>
      </div>
      <div className="col-6 m-2 p-2 text-secondary">
        <label><h3>Details</h3></label>
        <hr></hr>
        <div className="w-100 h-100 d-flex flex-wrap justify-content-center">
            <span className="w-100"><h4>Name:</h4> Mercedese Benze C300</span>
            <span className="w-100"><h4>Year:</h4> 2019</span>
            <span className="w-100"><h4>Features:</h4> Panoramic roof, keyless, 360 camera</span>
            <span className="w-100"><h4> Price:</h4> 19.5m</span>
            <span className="w-100"><h4>Transmission:</h4> Automatic</span>
            <span className="w-100"><h4>Engine Type:</h4> Black Engine</span>
            <span className="w-100"><h4>Location:</h4> Abuja, central Area</span>
            <span className="w-100"><h4>Tuning:</h4> turbo charged</span>
            <span className="w-100"><h4>Mileage:</h4> 30002km</span>
            <span className="w-100"><h4>Histories:</h4> None Accident</span>
            <span className="w-100"><h4>VIN:</h4> 123456789ODW</span>
        </div>
        <button className="btn btn-success m-1">Fix Inpection</button>
        <button className="btn btn-success m-1">Chat With Seller</button>
        <button className="btn btn-success m-1">Call Seller</button>
      </div>
      </div>
        </main>
    </div>
</div>
)
}
export default Single;