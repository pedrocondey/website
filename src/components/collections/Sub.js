import React, { Component } from 'react'
import Navbar from '../Navigation'
import photo1 from '../../images/maria meira 02.jpg'
import photo2 from '../../images/maria meira 03.jpg'
import photo3 from '../../images/maria meira 04.jpg'
import photo4 from '../../images/maria meira 01.jpg'
import photo5 from '../../images/maria meira 05.jpg'
import photo6 from '../../images/maria meira 06.jpg'


export default class Sub extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-4 bg-light">
                            <div className="text-left my-2 align-center">
                                <p className="colNameFont"><strong>#sub</strong></p>
                                <p className="collectionFont black text-justify ">This collection aims to tell a very concrete story of change and transformation in an abstract way. It symbolizes the passage from a negative moment to a positive one, through the use of black and white. Persuiting an ideia first used on a previous collection, a new word is highlighted and repeated throughout all the pieces. A word that summarizes the whole concept: MUTO.
The inspiration in terms of expression came from the artist Yellin, who works with deformed bodies made of synthetic leather, a material also used in this collection. These deliberately distorted and ambiguous forms are used in the collection in order to extrapolate the volume and create movement.</p>
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
