import React, { Component } from 'react'

class Register extends Component{
    render(){
        return(
            <main id="daftar" className="fazz-main" role="main">
                <section className="daftar-section text-center">
                    <div className="diagonal-gray"></div>
                    <div className="fazz-container">
                        <div className="fazz-row">
                            <div className="fazz-col-12">
                                <h1 className="section__header">
                                    Daftar <br/> <strong>Agen Garuda</strong>
                                </h1>
                            </div>
                        </div>
                        <form className="fazz-form">
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Nama Lengkap</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Email</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>No. Handphone</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Text</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-12">
                                    <div className="fazz-form__item text-left">
                                        <div>Alamat</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Provinsi</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Kecamatan</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Kelurahan</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Kota</div>
                                        <div><input type="text" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Upload KTP</div>
                                        <div><input type="file" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Upload Lokasi Usaha</div>
                                        <div><input type="file" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fazz-row">
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Upload Surat Keterangan Usaha</div>
                                        <div><input type="file" name="" /></div>
                                    </div>
                                </div>
                                <div className="fazz-col-6">
                                    <div className="fazz-form__item text-left">
                                        <div>Upload NPWP</div>
                                        <div><input type="file" name="" /></div>
                                    </div>
                                </div>
                            </div>
                            <button className="fazz-button">DAFTAR AGEN GARUDA</button>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}


export default Register