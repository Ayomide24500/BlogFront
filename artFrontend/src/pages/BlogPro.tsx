import { useEffect } from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useQuill } from "react-quilljs";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { CreateBlog } from "../Api/blogApi";
const BlogPro = () => {
  const { quill, quillRef }: any = useQuill();
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

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

  const ID = useSelector((state: any) => state.ID);

  return (
    <div>
      <div className=" w-[99%] flex justify-between items-center">
        <h1 className="text-xl font-bold mb-4">Draft in Ayomide</h1>
        <div className="py-6 w-[20%] flex justify-center items-center gap-3">
          <button
            className="py-3 px-3 bg-green-400 text-white font-bold rounded-lg"
            onClick={() => {
              CreateBlog({ title, content: value, category: "general" }, ID);
            }}
          >
            publish
          </button>
          <PiDotsThreeOutlineFill className="font-bold" />
          <div
            className="py-2 px-4 bg-green-500"
            style={{ borderRadius: "100%" }}
          >
            A
          </div>
          <div
            className="py-2 px-4 bg-green-500"
            style={{ borderRadius: "100%" }}
          >
            1
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="font-bold text-3xl pb-7 w-full border-none outline-none"
      />
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
