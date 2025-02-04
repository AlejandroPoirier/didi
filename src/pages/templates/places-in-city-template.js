import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import DirectoryList from "../../components/sections/DirectoryList";
const PlacesInCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "cl.PaxHero.bgImage";
  })[0];
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <DirectoryList
        places={data.contentfulCity.place}
        city={data.contentfulCity.name}
      ></DirectoryList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allContentfulAsset(filter: { title: { in: ["cl.PaxHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulCity(id: { eq: $id }) {
      name
      slug
    }
  }
`;

export default PlacesInCity;
