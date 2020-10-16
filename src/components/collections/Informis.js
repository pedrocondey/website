import React, { Component } from 'react'
import Navbar from '../Navigation'
import photo1 from '../../images/informis1.jpg' 
import photo2 from '../../images/informis2.jpg'
import photo3 from '../../images/informis3.jpg'
import photo4 from '../../images/informis4.jpg'
import photo5 from '../../images/informis5.jpg'
import photo6 from '../../images/informis6.jpg'
import photo7 from '../../images/informis7.jpg'
import photo8 from '../../images/informis8.jpg'
import photo9 from '../../images/informis9.jpg'
import photo10 from '../../images/informis10.jpg'



export default class Informis extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-12 bg-light ">
                            <div className="text-left my-2 mt-5 mb-5 ">
                                <p className="colNameFont text-right"><strong>informis</strong></p>
                                <p className="collectionFont black text-justify align-middle">Opposite ideas intersect in the construction of a collection that explores form and volume as an initial and final concept. Through silhouettes resulting from sculptural forms, amorphous and surprising volumes, the first drawings emerged that evolved into unexpected and, to a certain extent, unpredictable pieces.
The chosen color palette is consistent with previous collections, with black being the predominant color. However, there is a cinematic reference that involves the revelation of a colored element in an environment where the absence of color is preponderant. Thus, also in the collection, color appears as a way to increase the contrast between volumes, contributing to the creation of the element of surprise in the pieces.</p>
                            </div>
                        </div>
                        <div className="col-sm-0 bg-light"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 bg-light">
                        
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
                        <div className="row">

                                <div className="col-sm-3">
                                    <img src={photo4} className="img-fluid" />
                                </div>
                                <div className="col-sm-3">
                                    <img src={photo5} className="img-fluid" />
                                </div>
                                <div className="col-sm-3">
                                    <img src={photo6} className="img-fluid" />
                                </div>
                                <div className="col-sm-3">
                                    <img src={photo7} className="img-fluid" />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-sm-4 ">
                                    <img src={photo8} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo9} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo10} className="img-fluid" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
