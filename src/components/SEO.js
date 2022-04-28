import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import { getCountryFromUrl } from "../../config/countries-config";
import { getMetaByPath } from "../../config/seo-config";
import insertBtnParams from "../../config/analytics-config";

const SEO = () => {
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const { pathname, host } = useLocation();
  const country = getCountryFromUrl(pathname);

  const meta = getMetaByPath(
    countryCode,
    pathname.substring(3, pathname.length)
  );

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={`${meta.title} | DiDi ${country}`}
    >
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={host + pathname} />
      <link rel="alternate" href={host + pathname} hreflang="es-CL" />
      {
        // activate tracking pixel when DOM is mounted
        useEffect(() => {
          insertBtnParams();
        }, [])
      }
    </Helmet>
  );
};

export default SEO;
