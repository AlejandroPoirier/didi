import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import FaqList from "../../components/sections/FaqList";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "cr.HelpCenterHero.bgImage";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Costa Rica"
  );
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Pasajero Costa Rica"
  );

  return (
    <Layout schema="faq">
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
      <FaqList
        title={"Más preguntas frecuentes para socios conductores"}
        faqs={faqExpress[0].faq}
      ></FaqList>
      <FaqList
        title={"Más preguntas frecuentes para pasajeros"}
        faqs={faqPax[0].faq}
      ></FaqList>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["cr.HelpCenterHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "cr" } } } }
    ) {
      nodes {
        name
        faq {
          title
          slug
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;

export default CentroDeAyuda;
