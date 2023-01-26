import Pagination from '../Pagination';
import { useFetchData } from "../../hooks/useFetchData";
import FetchError from '../FetchError';


export default function App() {

  const [cleanedData, status, error] = useFetchData();

  if(status === "loading") return <h1>Loading ...</h1>
  if(status === "error") return <FetchError msg={error?.message}/>

  return (
  <>
    <h1>Current Page Users</h1>
    <Pagination allUsers={cleanedData} usersPerPage={5}/>
  </>
  )
}