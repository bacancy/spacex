import React from "react";

const FlightList = ({flightList}) => {
    return(
        flightList.map(flight => {
            <div className="col-sm-6 col-lg-4 col-xl-3 product-list-col">
                <div className="card card-upgrade">
                    <div className="card-img">
                        <img src="https://images.vexels.com/media/users/3/152650/isolated/preview/dc67bc351ada9cb55254534c2a35f57d-spacex-spacecraft-icon-by-vexels.png"
                            alt="" className="img" />
                    </div>
                    <div className="card-detail">
                        <h4 className="h4 title">{`${flight.mission_name} #${flight.flight_number}`}</h4>
                        <p className="text-desc">Mission Ids:{flight.mission_id.map(mission => {
                            <span className="ans">{mission}</span>
                        })}</p>
                        <p className="text-desc">Launch Year:<span className="ans">{flight.launch_year}</span></p>
                        <p className="text-desc">Successful Launch:<span className="ans">{flight.launch_success}</span></p>
                        <p className="text-desc">Successful Landing:<span className="ans"></span></p>
                    </div>
                </div>
            </div>
        })
    )
};

export default FlightList;