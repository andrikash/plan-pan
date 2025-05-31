export default {
  api: {
    input: "./docs/swagger.json", // or './swagger.yaml'
    output: {
      mode: "tags-split", // creates one file per tag
      target: "./app/api", // where generated client files go
      schemas: "./app/types/api", // where the types go
      client: "react-query", // auto-generate TanStack Query hooks
      baseUrl: "https://dev-api.planandpan.com", // base URL for the API
    },
  },
};
