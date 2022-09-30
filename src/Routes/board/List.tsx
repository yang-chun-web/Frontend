import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Welcome Home !!</h1>
      {loading
        ? ""
        : list.map((item: any) => (
            <Link to={`/board/${item._id}`} key={item._id}>
              <div>
                <h3>{item.title}</h3>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default List;
