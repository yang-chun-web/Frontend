import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { btnStyle } from "../../components/common/Button";
import styled from "styled-components";
import { writeOnTheBoard } from "../../api";

const Button = styled.button`
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

const FileInput = ({ text }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      file: [{}],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "file" });
  const watchResult = watch("file");
  const [count, setCount] = useState(watchResult.length);

  const onSubmit = async (e) => {
    if (text.title !== "") {
      await writeOnTheBoard(text).then((res) => res.json());
      const formData = new FormData();
      const imageList = e.file;

      imageList.forEach((item, index, array) => {
        formData.append("file", item.name[0]);
      });

      await fetch("/api/test", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));

      navigate("/");
    } else {
      alert("제목을 입력하세요");
    }
  };

  const onAppendClick = () => {
    if (watchResult.length < 5) {
      append();
      setCount((count) => count + 1);
    }
  };

  const onChange = (event) => {
    const { size } = event.target.files[0];
    console.log(size);
    if (size > 3 * 1024 * 1024) {
      alert("3MB 넘는 파일은 업로드할 수 없습니다.");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h1>Field Array</h1>
      <h3>{count}</h3>
      <div>
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <input
                {...register(`file.${index}.name`, {
                  onChange: onChange,
                })}
                type="file"
              />
              <button
                type="button"
                onClick={() => {
                  const watchResult = watch("file");
                  if (watchResult.length > 1) {
                    remove(index);
                    setCount((count) => count - 1);
                  }
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      {count < 5 ? (
        <button type="button" onClick={onAppendClick}>
          append
        </button>
      ) : (
        ""
      )}
      <Button>등록하기</Button>
      <CancelButton to={"/"}>취 &nbsp; 소</CancelButton>
    </form>
  );
};

export default FileInput;
