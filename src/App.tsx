import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { ListData } from "./list/TanStackDemo/useQueryDemo";
import {MutationDemo} from"./list/TanStackDemo/useMutationDemo";
import { CacheDemo } from "./list/TanStackDemo/cacheDemo";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ListData />
        <MutationDemo/> */}
        <ReactQueryDevtools initialIsOpen={false} />
        <CacheDemo/>
      </QueryClientProvider>
    </>
  );
}

export default App;
