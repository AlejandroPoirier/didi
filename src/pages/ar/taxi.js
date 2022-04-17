import React from "react";
import { graphql } from "gatsby";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import Requirements from "../../components/sections/Requirements";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "ar.TaxiHero.bgImage";
  })[0];
  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "ar.TaxiWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  return (
    <>
      <TaxiHero bgImage={taxiHeroBgImage}></TaxiHero>
      <TaxiWhyDidi image={taxiWhyDiDiImage}></TaxiWhyDidi>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: { title: { in: ["ar.TaxiHero.bgImage", "ar.TaxiWhyDiDi.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "ar" } } }
        name: { eq: "DiDi Taxi Argentina" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Taxi;
