import { IFilteredUser } from "../../../types/TUser";

export interface IPagination {
  allUsers: IFilteredUser[] | null,
  usersPerPage: number,
}