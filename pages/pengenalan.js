import React, { Component } from 'react'

class Introduction extends Component{
    render(){
        return(
            <main id="pengenalan" className="fazz-main" role="main">
                <section className="introduction-garuda">
                    <div className="fazz-container">
                        <div className="fazz-row">
                            <div className="fazz-col-6 garuda-caption">
                                <h1>APA ITU <strong>GARUDA</strong></h1>
                                <p className="text-big">
                                    Garuda atau kepanjangannya
                                    <span className="text-highlight"> Garda Digital
                                    Usaha Mikro-Kecil-Menengah Indonesia </span>
                                    adalah komunitas Agen PAYFAZZ yang bertujuan untuk
                                    mengembangkan potensi sebagai wirausaha yang
                                    berilmu dan berdedikasi tinggi.
                                </p>
                                <button className="fazz-button">AYO BERGABUNG SEKARANG!</button>
                            </div>
                            <div className="fazz-col-6">
                                <img className="garuda-img1" src="/static/images/apa-itu-garuda-1@2x.png" alt="Apa itu Garuda?" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="introduction-section2">
                    <div className="diagonal-gray"></div>
                    <img className="garuda-img2" src="/static/images/section-2@2x.png" alt="section 2" />
                </section>
                <section className="introduction-semangat">
                    <div className="fazz-container">
                        <div className="fazz-row text-center">
                            <div className="fazz-col-12">
                                <h1 className="section__header">Semangat <strong>GARUDA</strong></h1>
                            </div>
                        </div>
                        <div className="fazz-row text-center">
                            <div className="fazz-col-3 semangat-box">
                                <img className="semangat-img" src="/static/images/komitmen@2x.png" alt="Komitmen" />
                                <div className="semangat-title text-big">Komitmen</div>
                                <div className="text-small">terhadap fokus utama menjadi Agen Garuda</div>
                            </div>
                            <div className="fazz-col-3 semangat-box text-center">
                                <img className="semangat-img" src="/static/images/utamakan@2x.png" alt="Utamakan" />
                                <div className="semangat-title text-big">Utamakan</div>
                                <div className="text-small">pemberdayaan Potensi</div>
                            </div>
                            <div className="fazz-col-3 semangat-box text-center">
                                <img className="semangat-img" src="/static/images/andalkan@2x.png" alt="Andalkan" />
                                <div className="semangat-title text-big">Andalkan</div>
                                <div className="text-small">kerja keras</div>
                            </div>
                            <div className="fazz-col-3 semangat-box text-center">
                                <img className="semangat-img" src="/static/images/tumbuh@2x.png" alt="Tumbuh" />
                                <div className="semangat-title text-big">Tumbuh</div>
                                <div className="text-small">untuk mengembangkan kemampuan diri</div>
                            </div>
                        </div>
                        <hr className="diagonal" />
                    </div>
                </section>
            </main>
        )
    }
}

export default Introduction