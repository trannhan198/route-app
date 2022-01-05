import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>List all gallery</h1>
            <Link to="/">Home</Link>

            <div className='row'>
                ;<div className="card " style={{ width: "18rem" }}>
                    <img src="https://190scl1hma9msso803yzjim1-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/OTT-Website-20140822-IMG_15201.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>

                        <Link to="/view" className="btn btn-primary">View gallery</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
