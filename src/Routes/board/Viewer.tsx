import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Block from "../../components/common/Block";

interface Detail {
  title: string;
  contents?: string;
  createdAt: string;
}

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #ffffffee;
  height: 85vh;
  z-index: 0;
`;

const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
`;

const Viewer = () => {
  const [detail, setDetail] = useState<Detail>();
  const param = useParams();

  const text = async (id: string | undefined) => {
    setDetail(await fetch(`/api/detail/${id}`).then((res) => res.json()));
  };

  useEffect(() => {
    const { id } = param;
    text(id);
  }, [param]);

  const onClick = () => {
    console.log(detail);
  };

  return (
    <div>
      <Header />
      {detail ? (
        <Block>
          <Wrapper>
            <Title>{detail.title}</Title>
            <hr />
            <span>{new Date(detail.createdAt).toLocaleDateString()}</span>
            <div dangerouslySetInnerHTML={{ __html: `${detail.contents}` }} />
          </Wrapper>
        </Block>
      ) : null}
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default Viewer;
