import CodeMirror from "@uiw/react-codemirror";
import { atomone } from "@uiw/codemirror-themes-all";
import styles from "../../styles/Editor.module.scss";

const Editor = (props) => {
  const { displayName, extensions, value, onChange } = props;

  function handleChange(value) {
    onChange(value);
  }

  return (
    <div className={styles.editor}>
      <div className={styles.titleBar}>
        <span>{displayName}</span>
      </div>
      <CodeMirror
        height="200px"
        width="100%"
        draggable="true"
        theme={atomone}
        extensions={extensions}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
