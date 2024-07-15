import { app } from "./Firebase";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  query,
  getDoc,
} from "firebase/firestore";

async function getUser() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  return user;
}
const db = getFirestore(app);

async function addDocument() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await getUser();
    await addDoc(collection(db, "documents"), {
      userID: user.uid,
      name: "untitled-document.md",
      date: new Date().toISOString().split("T")[0],
      contents: "",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getDocumentID(document) {
  const docRef = doc(db, "documents", document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.id;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function deleteDocument(openedDocumentID: string) {
  console.log("Deleting document: ", openedDocumentID);
  try {
    await deleteDoc(doc(db, "documents", openedDocumentID));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

async function queryForDocuments() {
  const docsQuery = query(collection(db, "documents"));
  const querySnapshot = await getDocs(docsQuery);
  const allDocs = querySnapshot.docs.map((doc) => doc.data());
  console.log(allDocs);
  const documentIds = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  console.log(documentIds);
  return allDocs;
}

export { addDocument, deleteDocument, getDocumentID, queryForDocuments };
