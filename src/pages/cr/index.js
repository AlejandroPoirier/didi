import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HelloCTA from "../../components/sections/HelloCTA";
import HomeColumns from "../../components/sections/HomeColumns";


const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "cr.HomeHero.bgImage";
  })[0];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "cr.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "cr.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "cr.PaxCTA.image";
  })[0];
  const helloImage = images.filter((image) => {
    return image.title === "cr.HelloCTA.image";
  })[0];

  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <HelloCTA image={helloImage}></HelloCTA>
      <DrvCTA image={drvCTAImage} bullets={false}></DrvCTA>
      <PaxCTA image={paxCTAImage} bullets={false}></PaxCTA>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Index;

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
      filter: {
        title: {
          in: [
            "cr.HomeHero.bgImage"
            "cr.HelloCTA.image"
            "cr.SafetyCTA.image"
            "cr.DrvCTA.image"
            "cr.PaxCTA.image"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
