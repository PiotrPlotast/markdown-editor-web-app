import { app } from "./Firebase";
import generateUniqueId from "generate-unique-id";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
} from "firebase/firestore";
const db = getFirestore(app);

async function addDocument() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const docRef = await addDoc(collection(db, "documents"), {
      id: generateUniqueId(),
      name: "untitled-document.md",
      date: new Date().toISOString().split("T")[0],
      contents: "",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function queryForDocuments() {
  const docsQuery = query(collection(db, "documents"));
  const querySnapshot = await getDocs(docsQuery);
  const allDocs = querySnapshot.docs.map((doc) => doc.data());
  return allDocs;
}

export { addDocument, queryForDocuments };
