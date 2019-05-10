import React, { Component } from 'react'

class Benefit extends Component{
    render(){
        return(
            <main id="keuntungan" className="fazz-main" role="main">
                <section className="keuntungan-section">
                    <div className="fazz-container">
                        <div className="fazz-row">
                            <div className="fazz-col-6">
                                <img className="" src="/static/images/keuntungan-bergabung@2x.png" alt="Keuntungan" />
                            </div>
                            <div className="fazz-col-6">
                                <h1 className="section__header">Keuntungan Bergabung di <strong>Komunitas Garuda</strong></h1>
                                <p className="text-big">
                                    <ul className="section__list">
                                        <li>Program pelatihan dan pengembangan usaha</li>
                                        <li>Program pengembangan diri sebagai pengusaha</li>
                                        <li>Kesempatan mendapatkan media branding</li>
                                        <li>Mendapatkan Mentor Bisnis Profesional di bidangnya</li>
                                        <li>Jaringan bisnis yang luas</li>
                                        <li>Promo bulanan khusus</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Benefit