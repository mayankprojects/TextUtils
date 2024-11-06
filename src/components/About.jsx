import React, {useState} from "react";

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // })

    // const [btntext, setbtnText] = useState("Enable Dark Mode");

    // const togglestyle = () => {
    //     if(myStyle.color === "white")
    //     {
    //         setmyStyle({
    //             color: "black", 
    //             backgroundColor: "white"
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else
    //     {
    //         setmyStyle({
    //             color: "white", 
    //             backgroundColor: "black"
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }
    
    let myStyle = {
      color: props.mode === "dark"?"white":"#383948",
      backgroundColor: props.mode === "dark"?"#383948":"white",
    }

  return (
    <>
      <div className="container my-5">
        <h2 style={myStyle}>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" >
              <button style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              At TextUtils, we understand the importance of precision and efficiency in text editing. That's why we provide tools like word and character counters to help you meet specific length requirements effortlessly. Whether you're preparing a document, creating content for the web, or simply need to tweak some text, TextUtils is your go-to solution. With its intuitive interface and powerful features, TextUtils makes text manipulation easier and more accessible than ever before.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              TextUtils is completely free to use, ensuring that everyone can access its powerful text manipulation tools without any cost. We believe that efficient text editing should be available to everyone, whether you're a student, professional, or casual user. There are no hidden fees, premium subscriptions, or paywalls—just a simple, user-friendly platform that delivers exactly what you need, when you need it. With TextUtils, you can enjoy all the features and functionalities without spending a dime, making it the perfect tool for all your text editing needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
              style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              TextUtils is designed to be fully compatible across a wide range of devices and browsers, ensuring you can access and use its features wherever you are. Whether you're on a desktop computer, laptop, tablet, or smartphone, TextUtils delivers a seamless experience. The app is optimized for all major web browsers, including Chrome, Firefox, Safari, Edge, and others, so you can count on consistent performance no matter your preferred browser.
              </div>
            </div>
          </div>
        </div>
        {/* <button type="button" className="btn btn-primary my-3" onClick = {togglestyle}>{btntext}</button> */}
      </div>
    </>
  );
}
