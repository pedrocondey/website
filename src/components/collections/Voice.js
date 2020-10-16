import React, { Component } from 'react'
import Navbar from '../Navigation'
import photo1 from '../../images/voice1.jpg' 
import photo2 from '../../images/voice2.jpg'
import photo3 from '../../images/voice3.jpg'
import photo4 from '../../images/voice4.jpg'
import photo5 from '../../images/voice5.jpg'
import photo6 from '../../images/voice6.jpg'
import photo7 from '../../images/voice7.jpg'
import photo8 from '../../images/voice8.jpg'
import photo9 from '../../images/voice9.jpg'
import photo10 from '../../images/voice10.jpg'



export default class Voice extends Component {
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
                                <p className="colNameFont text-right"><strong>voice</strong></p>
                                <p className="collectionFont black text-justify align-middle">The collection intends to mark a position on themes (always) current and constantly debated. Sexuality, domestic violence, rape, racism, homophobia. It focuses on freedom of expression and freedom to BE. Imagery influenced by a specific feminist movement, the Riot Grrl, which explores the punk musical and political style, in which women fight for the same rights as men. Thus, through artistic language that communicates many times beyond what is written or spoken, as it deals with the communication of emotions and the unconscious, things are said that, sometimes, we are not able to understand by words.</p>
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
