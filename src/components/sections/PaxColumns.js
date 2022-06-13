import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const PaxColumns = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    bgColor: t("PaxColumns.bgColor"),
    columns: t("PaxColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = getImage(images[index]);
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          width={300}
          height={300}
          className="z-10 m-4 w-48"
        ></GatsbyImage>
      );
    });
  } else {
    props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PaxColumns;
