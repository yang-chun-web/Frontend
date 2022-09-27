const Viewer = (writing) => {
  const { title, contents, createdAt } = writing;
  return (
    <div>
      <h1>{title}</h1>
      <span>{new Date(createdAt).toLocaleDateString()}</span>
      <div>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </div>
  );
};

export default Viewer;
