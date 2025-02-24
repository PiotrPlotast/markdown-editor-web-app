import supabase from "./supabase";

async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {},
  });
}

async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

async function resetPassword() {
  await supabase.auth.resetPasswordForEmail("valid.email@supabase.io", {
    redirectTo: "http://example.com/account/update-password",
  });
}

async function updatePassword(new_password: string) {
  await supabase.auth.updateUser({ password: new_password });
}

export {
  signInWithGithub,
  signOut,
  signUpNewUser,
  signInWithEmail,
  resetPassword,
  updatePassword,
};
