import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Introduction from './pengenalan'
import Benefit from './keuntungan'
import Term from './syarat'
import Register from './daftar'
import Faq from "./faq";

class Home extends Component{
    render(){
        return(
            <div className="fazz-site">
                <Head>
                    <meta charSet="UTF-8" />
                    <title>Agen Garuda</title>
                    <meta
                    name="description"
                    content="Agen Garuda"
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:700" rel="stylesheet" />
                    
                    <link rel="stylesheet" href="/static/css/style.css" />
                    <link rel="stylesheet" href="/static/css/fontello.css" />
                </Head>
                <Header />
                <Introduction />
                <Benefit />
                <Term />
                <Register />
                <Faq />
                <Footer />
            </div>
        )
    }
}

export default Home