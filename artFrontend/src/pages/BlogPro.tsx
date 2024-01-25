import { useEffect } from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useQuill } from "react-quilljs";
import React from "react";
import "react-quill/dist/quill.snow.css";
const BlogPro = () => {
  const { quill, quillRef }: any = useQuill();
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");

  console.log(value);

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
      <p className="font-bold text-xl pb-8">Create Your Blog Here</p>
      <div>
        <ReactQuill
          modules={module}
          theme="snow"
          value={value}
          onChange={setValue}
          style={{
            height: "60vh",
            background: "rgb(134 239 172 / var(--tw-bg-opacity));",
          }}
        />

        {/* <div>
          Second quill
          <div ref={quillRef}></div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogPro;
