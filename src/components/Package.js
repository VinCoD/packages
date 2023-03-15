import React from 'react';

const MyStory = () => {
    return (
        <div className="p-16 w-full h-full">

            <div className="row no-gutters justify-content-center align-items-center">
                <div className="col-9 col-md-6 pricing__photo-wrapper">
                    <div className=" bg-[url(//images-pw.pixieset.com/elementfield/987091901/Onesmus__Wanjiru-354-dd64376e.jpg)] bg-[54% 11%]"></div>
                </div>
                <div
                    className="col-9 col-md-6 pricing__text-wrapper d-flex align-items-center justify-content-center">
                    <div className="pricing__text text-center">
                        <h2 className="pricing__title ca-package-name-lgjO42">DELUXE</h2>
                        <hr className="pricing__divider vertical-line vertical-line--sm ca-divider-DNORPB"/>
                        <p className="pricing__description ca-description-LBKEqg">
                            A3 60 Page Photo-book<br/>
                            Two Photographers<br/>
                            All Edited Photos<br/>
                            Private Online Gallery &amp; Delivery<br/>
                            Engagement Photo-shoot<br/>
                            Evening Reception Coverage<br/>
                            Duration: Till 10pm<br/>
                            4-6 Weeks Editing<br/>
                        </p>
                        <p className="pricing__price detail ca-price-RBJEo2">KES 250,000</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyStory;