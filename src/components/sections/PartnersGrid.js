import React from "react";
import { Link } from "gatsby";
import slugify from "react-slugify";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const PartnersGrid = ({ data, title, bgColor, textColor, sectionID }) => {
  const { t } = useTranslation();
  const props = {
    title: title || t("PartnersGrid.title"),
    bgColor: bgColor || t("PartnersGrid.bgColor"),
    textColor: textColor || t("PartnersGrid.textColor"),
    sectionID: sectionID || t("PartnersGrid.sectionId"),
  };

  props.columns = data.map((partner) => {
    const image = getImage(partner.logo);
    const link = t("PartnersGrid.linkItem", {
      partnerName: slugify(partner.name),
    });
    return {
      title: <Link to={link}>{partner.name}</Link>,
      desc: partner.desc,
      image: (
        <Link to={link}>
          <GatsbyImage
            image={image}
            alt={partner.logo.description}
            className="z-10 m-4"
          ></GatsbyImage>
        </Link>
      ),
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PartnersGrid;
