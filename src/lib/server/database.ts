const DUMMY_PROFESSORS: Professor[] = [
  {
    id: "12345",
    name: "David",
    school_id: "123",
    review_ids: ["1", "2", "3", "4", "5", "6"],
  },
  {
    id: "12346",
    name: "Jeff",
    school_id: "123",
    review_ids: ["7", "8", "9", "10", "11", "12"],
  },
];

export const getProfessorByQuery = async (
  query: string
): Promise<Professor[]> => {
  return DUMMY_PROFESSORS;
};

export const getProfessorById = async (id: string): Promise<Professor> => {
  return DUMMY_PROFESSORS[0];
};
