import React from "react";
import Layout from "../Layout/Layout";
import NotesMenu from "./NotesMenu";
import NotesList from "./NotesList";

export default function NotesApp() {
  return (
    <Layout withNavbar={true}>
      <NotesMenu />
      <NotesList />
    </Layout>
  );
}
