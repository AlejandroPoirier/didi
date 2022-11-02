import React, { useState } from "react";

interface ConsentPopupProps {
  isVisible: string;
  handleAccept: any;
  handleDeny: any;
}

const ConsentPopup = ({
  isVisible,
  handleAccept,
  handleDeny,
}: ConsentPopupProps) => {
  return (
    <section
      className={`w-full px-8 py-4 fixed z-30 bg-gray-primary opacity-90 text-white items-center bottom-0 flex justify-between flex-wrap ${
        !isVisible && "hidden"
      }`}
    >
      <div>
        <p className="text-xl text-left">
          For best online experience please click "Accept All" to allow us and
          our vendors to set cookies and similar technologies on your device.
          Our optional “Analytics” and “Advertising” cookies help us develop our
          services and deliver tailored content. For more choices, please click
          “Cookie settings”. To find out more, please see our{" "}
          <a
            href="https://privacycenter.didiglobal.com/GLOBAL/privacy-notice/ddfcd0c7df5156972c555177501ef5fd/GLOBAL"
            className="text-orange-primary underline"
          >
            Cookie Notice
          </a>{" "}
        </p>
      </div>
      <div className="text-right w-full">
        <button
          className="btn-primary mx-2"
          onClick={() => {
            handleAccept();
          }}
        >
          Accept All
        </button>
        <button className="btn-light mx-2" onClick={() => handleDeny(false)}>
          Deny
        </button>
      </div>
    </section>
  );
};

export default ConsentPopup;
