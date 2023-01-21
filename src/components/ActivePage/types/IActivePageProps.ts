import { IFilteredUser } from '../../../types/TUser';

export interface IActivePageProps {
    activePage: number;
    allUsers: IFilteredUser[] | null;
    usersPerPage: number;
}