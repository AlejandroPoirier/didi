// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import AccordionSection from "../AccordionSection";

// const TaxiRequirements = () => {
//   const data = useStaticQuery(graphql`
//     {
//       mdx(
//         frontmatter: {
//           section: { eq: "cl-drv-requirements" }
//           title: { eq: "Taxi" }
//         }
//       ) {
//         body
//         frontmatter {
//           title
//         }
//       }
//     }
//   `);

//   const items = [
//     {
//       title: data.mdx.frontmatter.title,
//       content: data.mdx.body,
//     },
//   ];

//   return (
//     <AccordionSection
//       title="Requerimientos"
//       desc="Los requerimientos mínimos que debes cumplir para conectarte como socio conductor."
//       bgAccordionColor="bg-gray-light"
//       textAccordionColor="orange-primary"
//       items={items}
//     ></AccordionSection>
//   );
// };

// export default TaxiRequirements;
