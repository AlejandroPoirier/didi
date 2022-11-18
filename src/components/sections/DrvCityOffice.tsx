import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import CTASection, { CTAProps } from "../CTASection";

interface DrvCityOfficeProps {
  data: {
    name: string;
    address: string;
    openHours: string[];
    phone: string;
    photos: ImageDataLike[];
  };
}

const DrvCityOffice = ({ data }: DrvCityOfficeProps) => {
  const { name, address, openHours, phone, photos } = data;
  // let hours: string[] = [];
  // openHours.forEach((hour: string) => {
  //   hours.push(hour);
  // });
  const image = getImage(photos[0]);
  const props: CTAProps = {
    hero: false,
    title: t("DrvCityOffice.title", { city: name }),
    desc: t("DrvCityOffice.desc", {
      officeAddress: address,
      officePhone: phone ? "| Teléfono: " + phone : null,
    }),
    textColor: t("DrvCityOffice.textColor"),
    bgColor: t("DrvCityOffice.bgColor"),
    image: (
      <GatsbyImage
        className="z-10 m-4 w-110 rounded"
        image={image!}
        alt={name}
      />
    ),
    btnMode: t("DrvCityOffice.btnMode"),
    btnType: "drv",
    bullets: openHours,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCityOffice;
