import { getInitialData } from ".";

const initialData = getInitialData();

export const activeNotes = initialData.filter((note) => !note.archived);
export const archivedNotes = initialData.filter((note) => note.archived);
