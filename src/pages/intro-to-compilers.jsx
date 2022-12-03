import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Utilities from "../components/Utilities";

const IntroToCompilers = () => {
  const [postContent, setPostcontent] = useState("");

  useEffect(() => {
    Utilities.makeCursorLinkBehavior();

    import("../posts/intro-to-compilers.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="article-wrapper">
      <article>
        <main>
          <h1 className="display-1">Intro to Compilers</h1>
          <h3 style={{ fontFamily: "montserrat" }}>
            How to Speak to Computers pre-Siri
          </h3>
          <Markdown>{postContent}</Markdown>
        </main>
      </article>
    </div>
  );
};

export default IntroToCompilers;
