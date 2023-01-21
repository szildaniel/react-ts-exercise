import { useState } from "react";
import { IPagination } from "./types/IPagination";
import ActivePage from '../ActivePage';

const Pagination = ({ allUsers, usersPerPage }: IPagination) => {
  const [activePage, setAcivePage] = useState<number>(1);


  const numberOfPages:number | null = allUsers && Math.ceil(allUsers.length / usersPerPage);
  const arrayWithNumbers:number[] = [...Array(numberOfPages).keys()].map(i => i+1);



  return (
    <>
      <ActivePage activePage={activePage} allUsers={allUsers} usersPerPage={usersPerPage} />
      <div className="pagination-container">
        {arrayWithNumbers && arrayWithNumbers.map( number => (
          <span
            onClick={() => { setAcivePage(number) }}
            key={number}
            className={activePage === number ? "pagination-link active" : "pagination-link"}
          >
            {number}
          </span>
        ))}
      </div>
    </>
  )
};

export default Pagination;