// import firebase from "firebase";
// import firebaseui from "firebaseui";

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start("#firebaseui-auth-container", {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// });

// const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function () {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById("loader").style.display = "none";
//     },
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: "popup",
//   signInSuccessUrl: "<url-to-redirect-to-on-success>",
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: "<your-tos-url>",
//   // Privacy policy url.
//   privacyPolicyUrl: "<your-privacy-policy-url>",
// };

// // The start method will wait until the DOM is loaded.
// ui.start("#firebaseui-auth-container", uiConfig);

// export default ui;
