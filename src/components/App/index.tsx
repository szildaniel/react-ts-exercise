import Pagination from '../Pagination';
import { useFetchData } from "../../hooks/useFetchData";


export default function App() {

  const [cleanedData, status, error] = useFetchData();

  if(status === "loading") return <h1>Loading ...</h1>
  if(status === "error") return <h1>{JSON.stringify(error)}</h1>

  return (
  <>
    <h1>Current Page Users</h1>
    <Pagination allUsers={cleanedData} usersPerPage={5}/>
  </>
  )
}


//todo funkcja w Pagination array of number, onError functions