import React from "react";

const Our_goals = () => {
  return (
   <div className="ourgoals m-bot-m-top">
        <div className="hold m-auto text-center ps-2 pe-2">
            <h1>Our Goals</h1>
            <p>We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and seasonality criteria while combining modern-creative and classNameic cooking traditions. By showcasing warmth, graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our consumers with exceptional service. To have every customer who comes through our doors leave impressed by their experience at Shaif's Cuisine and excited to come back again.</p>
        </div>
        <div className="photo m-auto">
            <div className="row-pho d-flex overflow-hidden p-2" >
                <div className="left " style={{flex: 1}}>
                    <div ><img className="w-h-img-cover" src="./src/assets/ourGoals_img1.png" alt="" /></div>
                </div>
                <div className="right d-flex flex-column ps-2" style={{flex: 1}} >
                    <div className="pb-2" ><img className="w-h-img-cover" src="./src/assets/ourGoals_img2.png" alt="" /></div>
                    <div className="pt-2" ><img className="w-h-img-cover" src="./src/assets/ourGoals_img3.png" alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Our_goals;
