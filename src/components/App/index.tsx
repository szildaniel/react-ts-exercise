import Pagination from '../Pagination';
import { IFilteredUser } from "../../types/TUser";
import { useFetchData } from "../../hooks/useFetchData";


export default function App() {

  const [cleanedData, status, error] = useFetchData();

  if(status === "loading") return <h1>Loading ...</h1>
  if(status === "error") return <h1>{JSON.stringify(error)}</h1>

  return (
  <>
    <h1>All Users</h1>
    <ul>
    {cleanedData && cleanedData.map( (user: IFilteredUser, i:number) => (
      <li key={i}>{user.name}</li>
    ))}
    </ul>
    
    <Pagination allUsers={cleanedData} usersPerPage={5}/>
  </>
  )
}
