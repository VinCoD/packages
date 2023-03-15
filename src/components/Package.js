import React from 'react';
// import wedding_prep_bw from "../../../img/wedding-prep/wedding_prep_bw.jpg";
// import Button from "../../utils/Button";

const MyComponent = () => {
    return (
        <div className="w-full mb-10 md:mb-20 px-4 md:px-16 pt-4 md:pt-16">
            <div className="flex flex-col-reverse md:flex-row bg-grayLightGreen">
                <div className="md:w-1/2">
                    <div className="w-full h-full flex justify-center items-center mb-10 md:mb-0">
                        <div className="flex flex-col items-center">
                            <h2 className="font-vollkorn font-light uppercase font-bold font-vollkorn pt-14 md:pt-0 pb-4">
                                DELUXE
                            </h2>
                            <p className="font-cprime font-light pb-9 md:pb-12"> A3 60 Page Photo-book
                                <br/>
                                Two Photographers
                                <br/>
                                All Edited Photos
                                <br/>
                                Private Online Gallery & Delivery
                                <br/>
                                Engagement Photo-shoot
                                <br/>
                                Evening Reception Coverage
                                <br/>
                                Duration: Till 10pm
                                <br/>
                                4-6 Weeks Editing

                                </p>
                            <p>KES 250,000</p>
                            {/*<a href="/book-me">*/}
                            {/*    <Button className="font-vollkorn uppercase text-2xl" text={"Book a session"}></Button>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="w-full h-[30vh] md:h-[500px] object-cover" src="https://www.dropbox.com/s/36wj2vzflqw3d20/_DSF9261-min.jpg?dl=1" alt="wedding preparation"/>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;