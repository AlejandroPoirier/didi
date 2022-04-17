import React from "react";
import { graphql } from "gatsby";
import ArticleHero from "../../../components/sections/ArticleHero";
import ArticleContent from "../../../components/sections/ArticleContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";

const ArticleTemplate = ({ data }) => {
  return (
    <>
      <ArticleHero data={data}></ArticleHero>
      <ArticleContent data={data}></ArticleContent>
      <PaxBanner></PaxBanner>
      <ArticlesColumns data={data}></ArticlesColumns>
    </>
  );
};

export const query = graphql`
  query ($id: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulArticle(id: { eq: $id }) {
      title
      excerpt
      updatedAt
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
      featuredImage {
        gatsbyImageData
      }
    }
    allContentfulArticle(filter: { country: { code: { eq: "cl" } } }) {
      nodes {
        title
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;

export default ArticleTemplate;
