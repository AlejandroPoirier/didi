import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const PartnersPrivateGrid = ({
  data,
  title,
  bgColor,
  textColor,
  sectionID,
}) => {
  const props = {
    title: title || t("PartnersGrid.title"),
    bgColor: bgColor || t("PartnersGrid.bgColor"),
    textColor: textColor || t("PartnersGrid.textColor"),
    sectionID: sectionID || t("PartnersGrid.sectionId"),
  };

  props.columns = data.map((partner) => {
    const image = partner.logo;
    const link = t("PartnersGrid.privateLinkItem", {
      partnerName: partner.slug,
    });
    return {
      title: <Link to={link}>{partner.name}</Link>,
      desc: partner.desc,
      height: "48",
      image: (
        <Link to={link}>
          <Image imageData={image} imageStyle="z-10 m-4"></Image>
        </Link>
      ),
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PartnersPrivateGrid;
