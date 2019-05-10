import React, { Component } from 'react'

class Term extends Component{
    render(){
        return(
            <main id="syarat" className="fazz-main" role="main">
                <section className="syarat-section">
                    <div className="fazz-container">
                        <div className="fazz-row">
                            <div className="fazz-col-6">
                                <h1 className="section__header">
                                    Syarat Masuk <strong>Komunitas Garuda</strong>
                                </h1>
                                <p className="text-big">
                                    <ul className="section__list">
                                        <li>
                                            Telah bergabung di PAYFAZZ minimal 3 bulan
                                        </li>
                                        <li>
                                            Berstatus minimal Agen Premium
                                        </li>
                                        <li>
                                            Rata-rata nilai pendapatan bulanan minimal
                                            Rp20.000.000,-
                                        </li>
                                        <li>
                                            Rata-rata transaksi bulanan minimal 50 order
                                        </li>
                                        <li>
                                            Memiliki tempat tinggal / tempat usaha tetap
                                        </li>
                                        <li>
                                            Bersedia untuk memasang material branding yang
                                            ditentukan oleh PAYFAZZ berdasarkan penilaian
                                            tim lapangan
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="fazz-col-6">
                                <img className="" src="/static/images/syarat-masuk@2x.png" alt="Syarat" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Term