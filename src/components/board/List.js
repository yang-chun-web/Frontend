import { useState, useEffect } from "react";

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
        : list.map((item) => (
            <div key={item._id}>
              <h3>{item.title}</h3>
              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
            </div>
          ))}
    </div>
  );
};

export default List;
