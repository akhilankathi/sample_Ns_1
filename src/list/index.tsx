import { useQuery } from "@tanstack/react-query";
import { getDataSevice } from "./service";

export const ListData = () => {
  const { data, error,isLoading, refetch } = useQuery({
    queryKey: ["list"],
    queryFn: () => getDataSevice(),
    enabled: false,
    
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
        onClick={() => refetch()}
      >
        GET DATA
      </button>
      <div style={{ margin: "50px" }}>
        {data?.map((item: any) => (
          <li>{item.title}</li>
        ))}
      </div>
    </div>
  );
};
