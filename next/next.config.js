/**
 * @type {import("next").NextConfig}
 */

const NextConfig = {
  images: {
    domains: [
      "s3.us-east-2.amazonaws.com",
      "ucpbucket.s3.us-east-2.amazonaws.com",
      "www.countryflags.io",
      "cdn.kcak11.com",
      "flagcdn.com",
    ],
  },
  eslint: {
    dirs: ["frontend"],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
      });
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/university",
        destination: "/universities",
        permanent: true,
      },
      {
        source: "/course",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/university/details/:id",
        destination: "/universities/:id",
        permanent: true,
      },
      {
        source: "/course/details/:id",
        destination: "/courses/:id",
        permanent: true,
      },
      {
        source: "/university-course-selection/:id",
        destination: "/universities/:id",
        permanent: true,
      },
      {
        source: "/university-course-selection/:id/:level_name",
        destination: "/universities/:id",
        permanent: true,
      },
      {
        source: "/course-selection/:id",
        destination: "/courses/:id",
        permanent: true,
      },
      {
        source: "/course-selection/:id/:level_name",
        destination: "/courses/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = NextConfig;
