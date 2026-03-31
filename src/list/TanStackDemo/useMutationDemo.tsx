import { useMutation } from "@tanstack/react-query";
import { postData } from "../service";
import { useId, useState } from "react";

export const MutationDemo = () => {
  const [title, setTitle] = useState("");
const [ description , setDescription] = useState('')
  const { mutate, isPending,data: posts, error } = useMutation({ mutationFn: postData });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        margin: " 30px",
      }}
    >
      {isPending && <div> loading.......!</div>}
      {error && <div>{error.message}</div>}
      <input
        type="text"
        name="title"
        id="title"
        placeholder="enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
      <button
        type="button"
        style={{ width: "200px" }}
        onClick={() => mutate({title , body: description , useId : 2})}
      >
        GET DATA
      </button>
      <div style={{ margin: "50px" }}>
          <li>{posts?.title}</li>
      </div>
    </div>
  );
};
