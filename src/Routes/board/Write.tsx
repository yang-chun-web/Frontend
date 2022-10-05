import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { writeOnTheBoard } from "../../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mediaStyle from "../../styles/mediaStyle";
import Header from "../../components/Header";
import { btnStyle } from "../../components/common/Button";

const EditorBlock = styled.div`
  ${mediaStyle}
  display:flex;
  justify-content: center;
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 5rem;
  height: 80vh;
  min-height: 500px;
`;

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  margin-bottom: 2.5rem;
  background-color: inherit;
  margin-left: 1.2rem;
  width: 70%;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 80%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 5px;
    padding-top: 10px;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.2;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
  margin-bottom: 2rem;
`;

const Button = styled.span`
  ${btnStyle}
  margin-left:1rem;
  letter-spacing: 2px;
`;

const CancelButton = styled(Link)`
  ${btnStyle}
  margin-left:1.5rem;
  &:hover {
    color: #cb0000;
  }
`;

const Write = () => {
  const navigate = useNavigate();
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
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const onClick = () => {
    const body = {
      title,
      contents,
      token: localStorage.getItem("Access"),
    };
    writeOnTheBoard(body)
      .then(() => navigate("/"))
      .catch(() => navigate("/board"));
  };
  return (
    <>
      <Header />
      <EditorBlock>
        <Wrapper>
          <TitleInput
            type="text"
            placeholder="제목을 입력하세요..."
            onChange={onTitleChange}
            required={true}
          />
          <QuillWrapper>
            <ReactQuill
              theme="snow"
              modules={toolbar}
              value={contents}
              onChange={setContents}
            />
          </QuillWrapper>
          <Button onClick={onClick}>등록하기</Button>
          <CancelButton to={"/"}>취 &nbsp; 소</CancelButton>
        </Wrapper>
      </EditorBlock>
    </>
  );
};

export default Write;
