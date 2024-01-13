import React from "react";
import FeatureBox from "./FeatureBox";
import FeBox1 from "./FeBox1";
import FeBox2 from "./FeBox2";
import FeBox3 from "./FeBox3";
import FeBox4 from "./FeBox4";

import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import featureimage3 from "../images/feature_4.png";
import featureimage4 from "../images/feature_5.png";
import featureimage5 from "../images/feature_6.png";

function Feature() {
  return (
    <div id="feature">
      <div className="a-container">
        <FeatureBox image={featureimage} tittle="Devlopment Course" />
        <FeBox1 image={featureimage1} tittle="Devlopment Course" />
        <FeBox2 image={featureimage2} tittle="Devlopment Course" />
        <FeBox3 image={featureimage3} tittle="Devlopment Course" />
        <FeBox4 image={featureimage4} tittle="Devlopment Course" />
      </div>
    </div>
  );
}

export default Feature;
