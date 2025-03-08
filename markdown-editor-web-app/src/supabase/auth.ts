import supabase from "./supabase";

async function signUpNewUser(email: string, password: string) {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://markdown-editor-web-app.vercel.app/",
    },
  });
}

async function signInWithEmail(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

async function signInWithGithub() {
  return await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173/",
    },
  });
}

async function signOut() {
  await supabase.auth.signOut();
}

async function resetPassword(email: string) {
  await supabase.auth.resetPasswordForEmail(email);
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
