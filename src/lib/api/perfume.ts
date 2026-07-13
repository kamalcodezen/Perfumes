import { serverFetch } from "../core/server";

// all perfumes get
export const getPerfumes = async () => {
  return await serverFetch("/api/perfumes");
};
