import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryHero from "../../../../components/sections/FoodDeliveryHero";
import GuidesDeliveryColumns from "../../../../components/sections/GuidesDeliveryColumns";
import Pagination from "../../../../components/Pagination";
import ArticlesColumns from "../../../../components/sections/ArticlesColumns";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  return (
    <Layout>
      <FoodDeliveryHero bgImage={repartidoresHeroBgImage}></FoodDeliveryHero>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["mx.FoodDeliveryHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(filter: { category: { eq: "food-courier" },  country: { code: { eq: "mx" } } }) {
      nodes {
        title
        slug
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
