import React, { useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { writeOnTheBoard } from "../../api";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import mediaStyle from "../../styles/mediaStyle";
import Header from "../../components/Header";
import { btnStyle } from "../../components/common/Button";

interface Detail {
  _id: string;
  title: string;
  contents?: string;
  createdAt: string;
}

const EditorBlock = styled.div`
  ${mediaStyle}
  display:flex;
  justify-content: center;
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 5rem;
  height: 80vh;
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
  margin-bottom: 2.5rem;
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

const Modify = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;
  const [detail, setDetail] = useState<Detail>();
  const [texts, setTexts] = useState("");
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

  const onChange = (event: any) => {
    setTexts(event.target.value);
  };

  const text = async (id: string | undefined) => {
    const { text } = await fetch(`/api/detail/${id}`, {
      method: "GET",
      headers: new Headers({
        Authorization: localStorage.getItem("Access")!,
      }),
    }).then((res) => res.json());
    setDetail(text);
  };

  const onClick = () => {
    console.log(detail);
  };

  useEffect(() => {
    const { id } = param;
    text(id);
  }, [param]);
  return (
    <>
      <Header />
      <EditorBlock>
        <Wrapper>
          <TitleInput
            type="text"
            onChange={onTitleChange}
            required={true}
            defaultValue={detail?.title}
          />
          <QuillWrapper>
            <ReactQuill
              theme="snow"
              modules={toolbar}
              value={texts}
              onChange={onChange}
              defaultValue={detail?.contents}
            />
          </QuillWrapper>
          <Button onClick={onClick}>수정하기</Button>
          <CancelButton to={"/"}>취소</CancelButton>
        </Wrapper>
      </EditorBlock>
    </>
  );
};

export default Modify;
