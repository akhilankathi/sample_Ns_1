export const getDataSevice = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return data;
};

export const postData = async (newpost : any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newpost),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};
