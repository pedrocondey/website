import React, { Component } from 'react'
import Navbar from '../Navigation'
import photo1 from '../../images/Shadow1.jpg' 
import photo2 from '../../images/Shadow2.jpg'
import photo3 from '../../images/Shadow3.jpg'
import photo4 from '../../images/Shadow4.jpg'
import photo5 from '../../images/Shadow5.jpg'
import photo6 from '../../images/Shadow6.jpg'
import photo7 from '../../images/Shadow7.jpg'
import photo8 from '../../images/Shadow8.jpg'
import photo9 from '../../images/Shadow9.jpg'
import photo10 from '../../images/Shadow10.jpg'


export default class Shadow extends Component {
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
                                <p className="colNameFont text-right"><strong>shadow</strong></p>
                                <p className="collectionFont black text-justify align-middle">In addition to the absence of light, the shadow is also the shape that a body draws on a surface when it interposes itself between it and a light source. Although it usually presents itself as a black reflection of what it represents, the shadow does not always come in the same way as yours. It is the search for the possible forms behind a projection that ends up revealing the creative process, creating the premises through which it develops, translating an ambiguous vision of a universe where light and shadow are confused and transformed into a representation pictorial of themselves.</p>
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
                                    <img src={photo10} className="img-fluid" />
                                </div>
                                <div className="col-sm-3">
                                    <img src={photo7} className="img-fluid" />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-sm-4 ">
                                    <img src={photo9} className="img-fluid" />
                                </div>
                                <div className="col-sm-4">
                                    <img src={photo8} className="img-fluid" />
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
