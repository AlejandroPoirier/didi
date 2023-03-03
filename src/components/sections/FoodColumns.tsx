import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodColumns = ({ images }: FoodColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodColumns.bgColor"),
    textColor: t("FoodColumns.textColor"),
    columns: t("FoodColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        className="z-10"
      ></GatsbyImage>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodColumns;
