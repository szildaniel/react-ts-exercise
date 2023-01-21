import {useEffect, useState} from 'react';
import { IActivePageProps } from '../components/ActivePage/types/IActivePageProps';
import { IFilteredUser } from '../types/TUser';

export function useFilterActiveUsers({activePage, allUsers, usersPerPage}: IActivePageProps){
    const [usersOnCurrentPage, setUsersOnCurrentPage] = useState<IFilteredUser[] | null>();

    const calculateStartingIndex = ():number | undefined => {
        if(activePage && activePage === 1){
            return 0;
        }
        else if(activePage) {
            return  (activePage-1) * usersPerPage;
        }
    }

    const calculateEndingIndex = ():number | undefined => {
        if((allUsers && activePage) && ((activePage-1) * usersPerPage > allUsers.length) ){
            return undefined
        }
        else if(activePage) {
            return activePage * usersPerPage;
        }
    }

    const filterUsers = () => {
        const startIndex = calculateStartingIndex();
        const endIndex = calculateEndingIndex();
        const currentUsers = allUsers?.slice(startIndex, endIndex);

        return currentUsers;
    }


    useEffect(() => {
        const currentUsers = filterUsers();

      setUsersOnCurrentPage(currentUsers);
    }, [allUsers, usersPerPage, activePage])

    return usersOnCurrentPage;
}