import React, { Component } from 'react'
import Accordion from "./accordion";

class Faq extends Component{
    render(){
        return(
            <main id="main" className="fazz-main" role="main">
                <section className="faq-section">
                    <div className="fazz-container">
                        <div className="fazz-row text-center">
                            <div className="fazz-col-12">
                                <h1 className="section__header">
                                    F.A.Q
                                </h1>
                            </div>
                        </div>
                        <div className="fazz-row">
                            <div className="fazz-col-6">
                                <Accordion>
                                    <div label="Apa itu Garuda?">
                                        <p>
                                            Garda Digital Usaha Mikro-Kecil-Menengah Indonesia atau disebut GARUDA adalah komunitas Agen PAYFAZZ
                                        </p>
                                    </div>
                                    <div label="Apa saja syarat menjadi Agen Garuda?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Bagaimana cara untuk mendaftar Agen Garuda?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Apa saja keuntungan menjadi Agen Garuda?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Berapa lama waktu verifikasi pendaftaran Agen Garuda?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </Accordion>
                            </div>
                            <div className="fazz-col-6">
                                <Accordion>
                                    <div label="Apakah ada biaya pendaftaran menjadi Agen Garuda?">
                                        <p>
                                            Garda Digital Usaha Mikro-Kecil-Menengah Indonesia atau disebut GARUDA adalah komunitas Agen PAYFAZZ
                                        </p>
                                    </div>
                                    <div label="Apabila pendaftaran ditolak, apakah masih dapat mendaftar kembali?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Apakah ada Customer Service Agen Garuda?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Dimana saja lokasi Agen Garuda dapat ditemukan?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div label="Apakah bisa mendaftar Agen Garuda, jika bukan Agen PAYFAZZ?">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Faq