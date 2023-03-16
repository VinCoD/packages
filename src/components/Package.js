import React from 'react';
// import wedding_prep_bw from "../../../img/wedding-prep/wedding_prep_bw.jpg";
// import Button from "../../utils/Button";

const MyComponent = (props) => {
    return (
        <div className="w-full mb-10 md:mb-20 px-4 md:px-16 pt-4 md:pt-16">
            <div className="flex flex-col-reverse md:flex-row bg-grayLightGreen">
                <div className="md:w-1/2">
                    <div className="w-full h-full flex justify-center items-center mb-10 md:mb-0">
                        <div className="flex flex-col items-center">
                            <h2 className="font-vollkorn uppercase font-bold font-vollkorn pt-14 md:pt-0 pb-4">
                                {props.title}
                            </h2>
                            <p className="font-cprime font-light pb-9 md:pb-12">
                                {props.description1}
                                <br/>
                                {props.description2}
                                <br/>
                                {props.description3}
                                <br/>
                                {props.description4}
                                <br/>
                                {props.description5}
                                <br/>
                                {props.description6}
                                <br/>
                                {props.description7}


                                </p>
                            <p>{props.price}</p>
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