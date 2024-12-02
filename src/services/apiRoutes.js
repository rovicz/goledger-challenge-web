import { api } from "../config/config";

export const apiRoutes = {
  getTx: async () => {
    return api.get("/query/getTx", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },
};
