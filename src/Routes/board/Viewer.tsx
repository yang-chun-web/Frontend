import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Block from "../../components/common/Block";
import { remove } from "../../api";
import { btnStyle } from "../../components/common/Button";
import { useRecoilState } from "recoil";
import { owner } from "../../atom";

interface Detail {
  _id: string;
  title: string;
  contents?: string;
  createdAt: string;
}

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #ffffffee;
  min-height: 500px;
  height: 80vh;
  z-index: 0;
`;

const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
`;

const CreatedAt = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const BoardContents = styled.div`
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
  min-height: 80px;
  height: 10%;
`;

const EditButton = styled(Link)`
  ${btnStyle}
  padding-bottom: 0.65rem;
  padding-top: 0.65rem;
  margin-right: 1rem;
`;
const DeleteButton = styled.button`
  ${btnStyle}
  margin-right: 1rem;
  &:hover {
    color: #c10000;
  }
`;

const Viewer = () => {
  const [writer, setWriter] = useRecoilState(owner);
  const [detail, setDetail] = useState<Detail>();
  const param = useParams();
  const navigate = useNavigate();

  const text = async (id: string | undefined) => {
    const { text, writer } = await fetch(`/api/detail/${id}`, {
      method: "GET",
      headers: new Headers({
        Authorization: localStorage.getItem("Access")!,
      }),
    }).then((res) => res.json());
    setDetail(text);
    setWriter(() => writer);
  };

  useEffect(() => {
    const { id } = param;
    text(id);
  }, [param]);

  const onRemoveClick = () => {
    console.log(detail);
    const body = {
      id: String(param.id),
      token: localStorage.getItem("Access"),
    };
    remove(body)
      .then(() => navigate("/"))
      .catch();
  };

  return (
    <div>
      <Header />
      {detail ? (
        <Block>
          <Wrapper>
            <Title>{detail.title}</Title>
            <hr />
            <CreatedAt>
              작성일: {new Date(detail.createdAt).toLocaleDateString()}
            </CreatedAt>
            <BoardContents
              dangerouslySetInnerHTML={{ __html: `${detail.contents}` }}
            />
          </Wrapper>
          {writer ? (
            <ButtonBlock>
              <EditButton to={`/edit/${detail._id}`}>수정하기</EditButton>
              <DeleteButton onClick={onRemoveClick}>삭제하기</DeleteButton>
            </ButtonBlock>
          ) : null}
        </Block>
      ) : null}
    </div>
  );
};

export default Viewer;
