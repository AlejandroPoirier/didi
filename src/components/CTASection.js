import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Btn from "./Btn";

// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/'dark'/'primary | btnLink customLink| reverse "false" "true"
// @props for images: bgImage (optional) | bgMobileImage (optional)| image - if you want an image next to the text
const CTASection = (props) => {
  const {
    title,
    desc,
    textColor,
    bgImage,
    bgMobileImage,
    bgColor,
    image,
    desImage,
    bullets,
    customBulletIcon,
    btnType,
    btnText,
    btnLink,
    btnMode,
    reverse,
  } = props;

  let sectionBtn = (
    <Btn type={btnType} link={btnLink} mode={btnMode}>
      {btnText}
    </Btn>
  );

  // if btnType is both will print pax first and drv second
  if (btnType === "both") {
    sectionBtn = (
      <>
        <Btn type="pax" mode={btnMode}></Btn>
        <br></br>
        <Btn type="drv" mode={btnMode}></Btn>
      </>
    );
  }
  return (
    <section
      className={`relative flex min-h-[40rem] w-full  items-center justify-center 
        ${bgColor && bgColor}`}
    >
      <div
        className={`container mx-auto flex w-full   flex-wrap items-center justify-center py-8 
        ${reverse && "flex-row-reverse"} ${
          image ? "xl:justify-between" : "xl:justify-start"
        }`}
      >
        <div className="flex-col">
          {image}
          <p className="text-center text-3xl font-bold">{desImage}</p>
        </div>
        
        <div
          className={`w-11/12 px-4  text-center lg:w-1/2 text-${textColor} z-10 xl:text-left`}
        >
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {bullets && (
            <>
              <ul className="list-none text-left text-xl">
                {bullets.map((item, index) => {
                  return (
                    <>
                      <li key={index}>
                        {!customBulletIcon ? (
                          <FontAwesomeIcon
                            key={index}
                            icon={faCarSide}
                            className=" text-orange-primary mr-4 "
                            size="sm"
                          />
                        ) : null}
                        {item}
                      </li>
                      <br></br>
                    </>
                  );
                })}
              </ul>
              <br></br>
            </>
          )}
          <p className="mb-5">{desc}</p>
          {sectionBtn}
        </div>
      </div>
      {bgImage}
      {bgMobileImage}
    </section>
  );
};

export default CTASection;
