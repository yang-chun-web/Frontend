import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Viewer = () => {
  const [detail, setDetail] = useState();
  const param = useParams();

  const text = async (id) => {
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
      <h1>Viewer</h1>
      {detail ? (
        <div>
          <h3>{detail.title}</h3>
          <span>{new Date(detail.createdAt).toLocaleDateString()}</span>
          <div dangerouslySetInnerHTML={{ __html: `${detail.contents}` }} />
        </div>
      ) : null}
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default Viewer;
