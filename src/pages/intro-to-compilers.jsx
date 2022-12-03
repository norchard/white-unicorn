// import React, { useState, useEffect } from "react";
// // import Markdown from "react-markdown";
// import "./intro-to-compilers.css";
// import Utilities from "../components/Utilities";
// import ReactMarkdown from "react-markdown";

// const IntroToCompilers = () => {
//   const [postContent, setPostcontent] = useState("");

//   useEffect(() => {
//     Utilities.makeCursorLinkBehavior();

//     import("../posts/intro-to-compilers.md").then((res) =>
//       fetch(res.default)
//         .then((response) => response.text())
//         .then((response) => setPostcontent(response))
//         .catch((err) => console.log(err))
//     );
//   }, []);

//   return (
//     <div className="article-wrapper">
//       <article>
//         <main>
//           <h1 className="display-1">An Intro to Compilers</h1>
//           <h3 style={{ fontFamily: "montserrat" }}>
//             How to Speak to Computers pre-Siri
//           </h3>
//           <ReactMarkdown>{postContent}</ReactMarkdown>
//         </main>
//       </article>
//     </div>
//   );
// };

// export default IntroToCompilers;
