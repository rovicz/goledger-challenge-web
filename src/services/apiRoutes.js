import { api } from "../config/config";

export const apiRoutes = {
  getAllArtists: async () => {
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

  getAllAlbums: async () => {
    return api.post(
      "/query/search",
      {
        query: {
          selector: {
            "@assetType": "album",
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

  getArtist: async (artist_key) => {
    return api.post(
      "/query/search",
      {
        query: {
          selector: {
            "@assetType": "artist",
            "@key": artist_key,
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
