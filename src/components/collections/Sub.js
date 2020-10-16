import React, { Component } from 'react'
import Navbar from '../Navigation'
import photo1 from '../../images/maria meira 02.jpg'
import photo2 from '../../images/maria meira 03.jpg'
import photo3 from '../../images/maria meira 04.jpg'
import photo4 from '../../images/maria meira 01.jpg'
import photo5 from '../../images/maria meira 05.jpg'
import photo6 from '../../images/maria meira 06.jpg'


export default class Sub extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-4 bg-light ">
                            <div className="text-left my-2 mt-5 mb-5 ">
                                <p className="colNameFont text-right"><strong>sub</strong></p>
                                <p className="collectionFont black text-justify align-middle">My collection is minimalist, inspired by Shari langen, an artist who transforms the human body in a performative and intuitive way, by doing experiences and using different and odd materials. Through his work I found the sculptor Lucy Glenndinning, who develops different aesthetic expressions, being her main focus the human body has a semiotic.
The mains concept of my collection is the feminine body. I chose to create light pieces, transparent, ethereal, that were capable to transmit purity, something between a naive and embarrassed way of being.</p>
                            </div>
                        </div>
                        <div className="col-sm-8 bg-light">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={photo1} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo2} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo3} className="img-fluid" />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-sm-4 ">
                                    <img src={photo4} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo5} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo6} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
