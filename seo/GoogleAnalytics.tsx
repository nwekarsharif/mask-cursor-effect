// src/seo/GoogleAnalytics.tsx
import React from 'react';

const GoogleAnalytics: React.FC = () => {
  const googleAnalyticsTag = process.env.NEXT_PUBLIC_GA_KEY as string;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTag}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsTag}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
