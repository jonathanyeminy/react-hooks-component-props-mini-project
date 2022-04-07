// About
// Make an About component as a child of App. It should return:

// an <aside> element with the following elements inside:
// an <img> element, with the src set to an image passed as a prop
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
// the image should also be accessible! Give it an alt attribute of "blog logo"
// a <p> element, with the about text for the blog passed in as a prop

import React from "react";


function About(prop) {
  return (
    <aside>
        <img src={prop.src} alt='blog logo'></img>
        <p>{prop.about}</p>
    </aside>
  );
}

export default About;
