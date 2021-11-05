import React from "react";
const { Kakao } = window;
// var search = window.location.search;
// var params = new URLSearchParams(search);
// var code = params.get("code");
// console.log("code: " + code);
// var url = "https://kauth.kakao.com/oauth/token";

// var accessToken;
// Kakao.Auth.login({
//   success: (auth) => {
//     console.log(auth);
//     Kakao.Auth.setAccessToken(auth.access_token);
//     Kakao.API.request({
//       url: "/v2/user/me",
//       data: {
//         property_keys: ["kakao_account.email", "properties.nickname"],
//       },
//       success: function (response) {
//         console.log(response.kakao_account);
//       },
//     });
//   },
//   fail: (err) => {
//     console.log("error!!!");
//     console.log(err);
//   },
// });

// Kakao.API.request({
//   url: "/v2/user/me",
//   success: function (response) {
//     console.log("response");
//     console.log(response);
//   },
//   fail: function (error) {
//     console.log(error);
//   },
// });
function Oauth() {
  return <></>;
}

export default Oauth;
