import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Block from "../../components/common/Block";
import { remove } from "../../api";

interface Detail {
  title: string;
  contents?: string;
  createdAt: string;
}

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #ffffffee;
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

const Viewer = () => {
  const [detail, setDetail] = useState<Detail>();
  const param = useParams();
  const navigate = useNavigate();

  const text = async (id: string | undefined) => {
    setDetail(await fetch(`/api/detail/${id}`).then((res) => res.json()));
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
          <button>수정하기</button>
          <button onClick={onRemoveClick}>삭제하기</button>
        </Block>
      ) : null}
    </div>
  );
};

export default Viewer;
