import React from "react";
import Layout from "../Layout/Layout";
import NotesMenu from "./NotesMenu";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";

export default function NotesApp() {
  const [notes, setNotes] = React.useState(getInitialData());

  return (
    <Layout withNavbar={true}>
      <NotesMenu data={notes} setData={setNotes} />
      <NotesList data={notes} />
    </Layout>
  );
}
