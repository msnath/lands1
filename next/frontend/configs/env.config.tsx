const Env = {
  UCP_API_URL: process.env.NEXT_PUBLIC_UCP_API_URL ?? "",

  ALGOLIA_APP: process.env.NEXT_PUBLIC_ALGOLIA_APP ?? "",
  ALGOLIA_KEY: process.env.NEXT_PUBLIC_ALGOLIA_KEY ?? "",

  MAPS_KEY: process.env.NEXT_PUBLIC_MAPS_KEY ?? "",
};

export default Env;
