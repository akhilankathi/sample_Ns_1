import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { ListData } from './list'

function App() {

const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}><ListData/></QueryClientProvider>
        
    </>
  )
}

export default App
