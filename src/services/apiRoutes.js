import { api } from "../config/config";

export const apiRoutes = {
  getArtists: async () => {
    return api.post(
      "/query/search",
      {
        query: {
          selector: {
            "@assetType": "artist",
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
  },
};
