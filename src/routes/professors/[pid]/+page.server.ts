import type { PageServerLoad } from "./$types";

import { getProfessorById } from "$lib/server/database";

export const load = (async ({ params }) => {
  return { professor: await getProfessorById(params.pid) };
}) satisfies PageServerLoad;

export const ssr = true;
