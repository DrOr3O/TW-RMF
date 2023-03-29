import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
  return {
    name: "Thomas Powell",
    reviews: [],
  };
}) satisfies PageServerLoad;
