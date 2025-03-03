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
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const { data, error } = await supabase.from("documents").insert({
    user_id: user.id,
    name: "Untitled",
    content: "",
    created_at: formattedDate,
  });

  if (error) {
    console.error("Error creating new document:", error.message);
  } else {
    return data;
  }
};

const saveDocument = async (id: string, content: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return; // No user logged in
  const { data, error } = await supabase
    .from("documents")
    .update({ content: content })
    .eq("id", id)
    .eq("user_id", user.id)
    .select();

  if (error) {
    console.error("Error saving document:", error.message);
  } else {
    return data;
  }
};

export { fetchDocuments, createNewDocument, saveDocument };
