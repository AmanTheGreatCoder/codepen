import React from "react";
import Editor from "./Editor";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useState, useLayoutEffect } from "react";
import styles from "../../styles/Pen.module.scss";
import Link from "next/link";

const Pen = () => {
  const [htmlStr, setHTML] = useState("");
  const [cssStr, setCSS] = useState("");
  const [jsStr, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useLayoutEffect(() => {
    setSrcDoc(`<html>
  <body>${htmlStr}</body>
  <style>${cssStr}</style>
  <script>${jsStr}</script>
  </html>`);
  }, [htmlStr, cssStr, jsStr]);

  return (
    <div className={styles.penBody}>
      <div className={styles.top}>
        <div className={styles.Header}>
          <Link href="/">
            <div className={styles.logo}>
              <img
                src="https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg"
                alt=""
              />
            </div>
          </Link>
          <div>
            <div className={styles.penTitle}>Untitled</div>
            <div className={styles.penAuthor}>Anonymous</div>
          </div>
        </div>

        <div className={styles.editors}>
          <Editor
            className={styles.editor}
            onChange={setHTML}
            value={htmlStr}
            displayName="HTML"
            extensions={[
              html({
                autoCloseTags: true,
                selfClosingTags: true,
                matchClosingTags: true,
              }),
            ]}
          />
          <Editor
            className={styles.editor}
            onChange={setCSS}
            value={cssStr}
            displayName="CSS"
            extensions={[css()]}
          />
          <Editor
            className={styles.editor}
            onChange={setJS}
            value={jsStr}
            displayName="JS"
            extensions={[javascript({ jsx: true, typescript: true })]}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.outputWindow}>
          <iframe className={styles.iframe} srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
};

export default Pen;
