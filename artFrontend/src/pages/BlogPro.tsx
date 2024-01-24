import { useEffect } from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useQuill } from "react-quilljs";
import React from "react";
import "react-quill/dist/quill.snow.css";
const App = () => {
  const { quill, quillRef }: any = useQuill();
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    [{ size: ["small", false, "large", "huge"] }],

    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  var module = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      App the
      <div>
        <ReactQuill
          modules={module}
          theme="snow"
          value={value}
          onChange={setValue}
          style={{
            height: "60vh",
          }}
        />

        <div>
          Second quill
          <div ref={quillRef}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
