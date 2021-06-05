import React from 'react';
import { Link } from 'react-router-dom';
import { useDefault } from "./Context"

const Carttotal = () => {
    const { clearcart, cartsubtotal, carttotal, carttax } = useDefault()
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto  col-sm-8  text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger mb-3 text-uppercase px-5" type="button" onClick={clearcart}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                Subtotal :
                            </span>
                            <strong>{cartsubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax :
                            </span>
                            <strong>{carttax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>{carttotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Carttotal;