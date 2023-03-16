import React from 'react';
// import wedding_prep_bw from "../../../img/wedding-prep/wedding_prep_bw.jpg";
// import Button from "../../utils/Button";

const MyComponent = (props) => {
    return (
        <div className="w-full mb-10 md:mb-20 px-4 md:px-16 pt-4 md:pt-16">
            <div className={`flex flex-col md:flex-row${props.flexVal ? props.flexVal: ''} bg-grayLightGreen`}>
                <div className="md:w-1/2">
                    <img className="w-full h-[30vh] md:h-[500px] object-cover" src={props.src} alt="wedding preparation"/>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full h-full flex justify-center items-center mb-10 md:mb-0">
                        <div className="flex flex-col items-center">
                            <h2 className="font-vollkorn uppercase font-bold font-vollkorn pt-14 md:pt-0 pb-4">
                                {props.title}
                            </h2>
                            <p className="font-cprime font-light pb-9 md:pb-12">
                                {props.description.split(",").map((item, index) => {
                                    return <>{item}<br/></>
                                })}

                                </p>
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyComponent;