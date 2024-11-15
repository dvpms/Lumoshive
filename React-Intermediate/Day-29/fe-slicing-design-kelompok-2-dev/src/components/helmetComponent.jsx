import React from "react";
import { Helmet } from "react-helmet";

const helmetComponent = ({ metaData }) => {
    return (
        <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords.join(', ')} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:url" content={metaData.url} />
        <script type="application/ld+json">
          {JSON.stringify(metaData.schema)}
        </script>
      </Helmet>
    );
};

export default helmetComponent;