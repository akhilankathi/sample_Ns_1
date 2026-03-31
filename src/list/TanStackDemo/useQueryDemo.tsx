import { useQuery } from "@tanstack/react-query";
import { getDataSevice } from "../service";
import { useState } from "react";

export const ListData = () => {
  // we can use refecth to fetch data on button click for that keep enabled as false , we can do it as many times as we want
  // we can do so with defining a state and handle the enabled with the state and only once 
  const [isLoadData, setIsLoadData] = useState(false)
  const { data: products, error,isLoading, refetch , isError } = useQuery({
    queryKey: ["list"],
    queryFn: () => getDataSevice(),
    enabled: isLoadData,
    
  });


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        margin: " 30px",
      }}
    >
        {isLoading && <div> loading.......!</div>}
        {error && <div>{error.message}</div> }
      <button
        type="button"
        style={{ width: "200px" }}
        onClick={() => setIsLoadData(true)}
      >
        GET DATA
      </button>
      <button
        type="button"
        style={{ width: "200px" }}
        onClick={() => refetch()}
      >
        RE-FETCH DATA
      </button>
      <div style={{ margin: "50px" }}>
        {products?.map((item: any) => (
          <li>{item.title}</li>
        ))}
      </div>
    </div>
  );
};
