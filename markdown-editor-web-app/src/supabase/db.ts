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
    console.log("Documents:", data);
  }
};

export { fetchDocuments };
