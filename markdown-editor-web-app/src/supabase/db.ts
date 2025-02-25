import supabase from "./supabase";

const fetchDocuments = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return; // No user logged in
  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching documents:", error.message);
  } else {
    return data;
  }
};

const createNewDocument = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return; // No user logged in
  const { data, error } = await supabase.from("documents").insert({
    user_id: user.id,
    name: "Untitled",
    content: "",
  });

  if (error) {
    console.error("Error creating new document:", error.message);
  } else {
    return data;
  }
};

export { fetchDocuments, createNewDocument };
