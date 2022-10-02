import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mediaStyle from "../../styles/mediaStyle";

const Block = styled.div`
  ${mediaStyle};
  position: relative;
`;

const Wrapper = styled.div`
  padding: 1rem;
  position: relative;
  background-color: #f7fbffd4;
  height: 88vh;
  z-index: 0;
`;

const TextCard = styled(Link)`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  &:hover {
    background-color: #000000dd;
    color: white;
  }
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CreatedAt = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const List = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    setList(await fetch("/api/view").then((res) => res.json()));
  };

  useEffect(() => {
    fetchList();
    setLoading(false);
  }, []);

  return (
    <Block>
      <Wrapper>
        {loading
          ? ""
          : list.map((item: any) => (
              <TextCard to={`/board/${item._id}`} key={item._id}>
                <Title>{item.title}</Title>
                <CreatedAt>
                  {new Date(item.createdAt).toLocaleDateString()}
                </CreatedAt>
              </TextCard>
            ))}
      </Wrapper>
    </Block>
  );
};

export default List;
