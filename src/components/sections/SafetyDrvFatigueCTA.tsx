import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import DoubleCTASection, { DoubleCTAProps } from "../DoubleCTASection";

interface SafetyDrvFatigueCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyDrvFatigueCTA = ({ image }: SafetyDrvFatigueCTA) => {
  const { t } = useTranslation();
  const props: DoubleCTAProps = {
    hero: false,
    title: t("SafetyDrvFatigueCTA.title"),
    desc: t("SafetyDrvFatigueCTA.desc"),
    title2: t("SafetyDrvFatigueCTA.title2"),
    desc2: t("SafetyDrvFatigueCTA.desc2"),
    textColor: t("SafetyDrvFatigueCTA.textColor"),
  };
  return <DoubleCTASection {...props}></DoubleCTASection>;
};

export default SafetyDrvFatigueCTA;
