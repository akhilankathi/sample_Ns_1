import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataSevice } from "../service";
import { useState } from "react";

export const CacheDemo = () => {
  const queryClient = useQueryClient();
  // we can use refecth to fetch data on button click for that keep enabled as false , we can do it as many times as we want
  // we can do so with defining a state and handle the enabled with the state and only once
  const [isLoadData, setIsLoadData] = useState(false);
  const {
    data: products,
    error,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["list"],
    queryFn: () => getDataSevice(),
    enabled: isLoadData,
    staleTime: 1000 * 5,
    gcTime: 1000 * 5,
    refetchInterval : 1000*3 ,
  });

  const handleClickRefetech = () => {
    const data = queryClient.getQueryData(["list"]);

    // if (!data) {
      refetch(); // only call API if no cache
    // }
  };

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
      {error && <div>{error.message}</div>}
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
        onClick={() => handleClickRefetech()}
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
