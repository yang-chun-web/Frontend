import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useState } from "react";

const EditorBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  padding-top: 5rem;
  padding-bottom: 5rem;
  overflow-x: hidden;
`;

const TitleInput = styled.input`
  font-size: 2.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 5px;
    padding-top: 10px;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.2;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
  margin-bottom: 2rem;
`;

const Board = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const toolbar = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link", "image"],
    ],
  };
  const onTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const onClick = () => {
    const body = {
      title,
      contents,
    };
    console.log(body);
  };
  return (
    <div>
      <EditorBlock>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요..."
          onChange={onTitleChange}
        />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            modules={toolbar}
            value={contents}
            onChange={setContents}
          />
        </QuillWrapper>
        <button onClick={onClick}>등록</button>
        <button>취소</button>
      </EditorBlock>
    </div>
  );
};

export default Board;
