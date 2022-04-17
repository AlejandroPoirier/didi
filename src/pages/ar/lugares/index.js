import React from "react";
import { graphql } from "gatsby";
import PaxHero from "../../../components/sections/PaxHero";
import CityList from "../../../components/sections/CityList";

const Lugares = ({ data }) => {
  const cities = data.contentfulCountry.city;
  const country = data.contentfulCountry.name;
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ar.PaxHero.bgImage";
  })[0];
  return (
    <>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <CityList country={country} cities={cities} />
    </>
  );
};

export default Lugares;

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
    contentfulCountry(code: { eq: "ar" }) {
      name
      code
      city {
        name
      }
    }
    allContentfulAsset(filter: { title: { in: ["ar.PaxHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
