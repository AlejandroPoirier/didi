import React from "react";
import CTASection from "../CTASection";

const DirectionHero = ({ data }) => {
  console.log(data);
  const { origin, originAddress, destination, destinationAddress } = data;

  return (
    <CTASection
      title={`Como llegar a ${destination} desde ${origin}`}
      desc={`Desde: ${originAddress} | Hacia: ${destinationAddress}`}
      bgColor={"bg-blue-primary"}
      textColor="white"
      bgColor="bg-blue-primary"
      image={
        <img
          className="z-10 w-full m-4 rounded md:w-100 lg:w-110"
          alt={origin + " mapa"}
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${destinationAddress}&zoom=12&size=2800x400&maptype=roadmap
&markers=color:red%7C${destinationAddress}&markers=color:red%7C${originAddress}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
        ></img>
      }
      btnType="pax"
      btnMode="light"
      reverse="true"
    ></CTASection>
  );
};

export default DirectionHero;
