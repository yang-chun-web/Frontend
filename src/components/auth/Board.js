import { useState } from "react";
import { createText } from "../../api";

const Board = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    const body = { title, content };
    createText(body);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "text") {
      setContent(value);
    }
  };
  return (
    <div>
      <h1>Board</h1>
      <form onSubmit={onSubmit}>
        <input name="title" placeholder="title" onChange={onChange} />
        <textarea name="text" placeholder="내용" rows={4} onChange={onChange} />
        <button>등록</button>
      </form>
    </div>
  );
};

export default Board;
