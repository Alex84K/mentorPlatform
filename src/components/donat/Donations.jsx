import React from 'react';
import './donat.css';

function Donations() {
    return (
        <div id='home'>
            <main className='container-fluid bg_color_blye blog_maim_blye flex-row justify-content-between align-items-center'>
                <div className='container row m0auto d-flex justify-content-between align-items-center pb-5 pt-5 contBlog1'>
                    <div className='row col-12 col-sm-12 col-md-8 col-xl-8 blog_row'>
                        <h1 className='text-green txt_blog col-sm-12'>Donations</h1>
                    </div>
                </div>
            </main>
            <div className="donatPage container">
                <div className='col-xl-8 col-ml-12 col-sm-12 m0auto row align-items-center'>
                    <h2 className="h2blue h2Donat text-green text-center pt-4 pb-3">Choose a donation method that is convenient for you</h2>
                    <div className="cartDonatBlock row border_blue_big m0auto">
                        <div className="cartDonat d-flex flex-column  col-xl-6 col-md-6 col-sm-12 p-5 pt-3">
                            <h3 className="h3paypal h3block text-center">PayPal</h3>
                            <img src="../img/qrcode.png" alt="mein" className="qrcode" />
                        </div>
                        <div className="cartDonat d-flex flex-column col-xl-6 col-md-6 col-sm-12 p-5 pt-3">
                            <h3 className="h3paypal h3block text-center">PayPal</h3>
                            <img src="../img/qrcode.png" alt="mein" className="qrcode" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Donations;

