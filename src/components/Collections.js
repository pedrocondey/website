import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Collections extends Component {
    render() {
        return (

            <section className="collections text-center">
                <h3 className="title pt-5"></h3>
                <div className="container grid-5 " >
                    <div>
                        <Link to="/sub" className="to">
                            <p className="pTop subT"><strong>#SUB</strong></p>
                            <p className="pBottom subB font-weight-bold">BLOOM Contest</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/muto" className="to">
                            <p className="pTop mutT"><strong>MUTO</strong></p>
                            <p className="pBottom mutB">SS19</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/informis" className="to">
                            <p className="pTop infT"><strong>INFORMIS</strong></p>
                            <p className="pBottom infB">FW1920</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/voice" className="to">
                            <p className="pTop voiT"><strong>VOICE</strong></p>
                            <p className="pBottom voiB">SS20</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/shadow" className="to">
                            <p className="pTop shaT"><strong>SHADOW</strong></p>
                            <p className="pBottom shaB">FW2021</p>
                        </Link>
                    </div>
                </div>
            </section>

        )
    }
}
