import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <footer className="fazz-footer">
                <div className="fazz-container">
                    <div className="fazz-row footer-row">
                        <div className="fazz-col-6">
                            <p className="fazz-footer__copyright text-small">ALL RIGHTS RESERVED BY PT PAYFAZZ TEKNOLOGI NUSANTARA</p>
                        </div>
                        <div className="fazz-col-6 icon-section">
                            <i className="icon-facebook fazz-footer__icon"></i>
                            <i className="icon-twitter fazz-footer__icon"></i>
                            <i className="icon-instagram fazz-footer__icon"></i>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer