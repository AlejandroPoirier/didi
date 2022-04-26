import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const LegalHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("LegalHero.title"),
    desc: t("LegalHero.desc"),
    textColor: t("LegalHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("LegalHero.btnMode"),
    btnText: "Términos y Condiciones",
    btnLink: "/cl/legal/terminos-y-condiciones/",
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalHero;
