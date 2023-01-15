import {useState, useEffect} from 'react';
import { flatPick } from '../helpers/flatPick';
import { IFilteredUser, IUser } from '../types/TUser';
import {getUsers} from '../api/users';
import {useQuery} from "react-query";


export const useFetchData = function(){

  const {status, error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })

  const [cleanedData, setCleanedData] = useState<IFilteredUser[] | null>(null);

  useEffect( () => {
    let filteredData:any = [];

     users && users.results.forEach( (user:IUser) => {
      const filteredPropUser = flatPick(user, ['name.first', 'name.last', 'dob.age', 'email']);
      filteredData.push(filteredPropUser);
    });
    let flattenUsers:any = [];

    filteredData && filteredData.forEach( (user: IFilteredUser) => {
      const flattenUser = {
        name: `${user.first} ${user.last}`,
        age: user.age,
        email: user.email
      };
      flattenUsers.push(flattenUser);
    })

    setCleanedData(flattenUsers);
  }, [])

  return [cleanedData, status, error] as const;
}