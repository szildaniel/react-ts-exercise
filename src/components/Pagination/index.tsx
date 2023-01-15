import React, {useEffect, useState} from "react";
import { IPagination } from "./types/IPagination";

const Pagination = ({allUsers, usersPerPage}:IPagination) => {
  const [pages, setPages] = useState();
  
  const numberOfPages = allUsers && Math.ceil(allUsers.length /  usersPerPage);
  const arrayWithNumbers = [...Array(numberOfPages)];

  return (
  <>
  PAGINATION HERE
  {arrayWithNumbers && arrayWithNumbers.map( (number,i) => (
    <span key={i}>{i}</span>
  ))}
  </>
  )
};

export default Pagination;