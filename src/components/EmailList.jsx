import { Fragment, useState, useEffect } from "react";
import "./Emaillist.css";
import data from './data';
import _ from "lodash";

const EmailList = () => {  

  const [search, setSearch] = useState('');
  const [arrData, setArrData] = useState([]);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
   setArrData(data);
  }, [])
  
  const handleSearch = (e) =>  {
    setSearch(e.target.value);
  }
  const pageSize = 5;
  const pageCount = arrData ? Math.ceil(arrData.length / pageSize) : 0;
  console.log(pageCount)
  const pages = _.range(1, pageCount + 1);

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginationData = _(arrData).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginationData);
  };
   
  return (
    
    <Fragment>
      <div className="main-container">
        <div className="heading">
          <div className="searchbar">
            <input type="search" onChange={(e)=>handleSearch(e)} />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2 0C6.57913 0 7.90177 0.547855 8.87696 1.52304C9.85215 2.49823 10.4 3.82087 10.4 5.2C10.4 6.488 9.928 7.672 9.152 8.584L9.368 8.8H10L14 12.8L12.8 14L8.8 10V9.368L8.584 9.152C7.64044 9.95742 6.44057 10.3999 5.2 10.4C3.82087 10.4 2.49823 9.85215 1.52304 8.87696C0.547855 7.90177 0 6.57913 0 5.2C0 3.82087 0.547855 2.49823 1.52304 1.52304C2.49823 0.547855 3.82087 0 5.2 0ZM5.2 1.6C3.2 1.6 1.6 3.2 1.6 5.2C1.6 7.2 3.2 8.8 5.2 8.8C7.2 8.8 8.8 7.2 8.8 5.2C8.8 3.2 7.2 1.6 5.2 1.6Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>

          <div className="right-corner">
            <button>View</button>
            <button>Edit</button>
            <button>Status</button>
            <button>Send</button>
            <button className="dots">...</button>
          </div>
        </div>
        <table border={1}>
          <thead>
          <tr>
            <td className="flex">
              <div className="name">
              <input type="checkbox" />Name
              </div>
              <button className="dots">...</button>
            </td>
            <td>Email</td>
            <td>Phone</td>
            <td>Status</td>
            <td>Source</td>
            <td>Date Added</td>
            </tr>
          </thead>
          <tbody>
          {
            search !== '' && arrData.filter((value) => {
              return value.name.includes(search);
            }).map((val) => (
                <tr>
          <td className="flex">
              <div className="name">
              <input type="checkbox" />{val.name}
              </div>
              <button className="dots">...</button>
            </td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
            <td style={{color: val.status === 'Closed' ? 'red' : val.status === 'In Progress' ? 'blue' : 'green'}}>{val.status}</td>
            <td>{val.added}</td>
            <td>{val.dateAdded}</td>
          </tr>
            ))
          }
           {
            search === '' && arrData.map((val) => (
                <tr>
          <td className="flex">
              <div className="name">
              <input type="checkbox" />{val.name}
              </div>
              <button className="dots">...</button>
            </td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
            <td style={{color: val.status === 'Closed' ? 'red' : val.status === 'In Progress' ? 'blue' : 'green'}}>{val.status}</td>
            <td>{val.added}</td>
            <td>{val.dateAdded}</td>
          </tr>
            ))
          }
          </tbody>
          <div className="pagination"></div>
        </table>
        
      </div>
      
      <nav className="pag-nav">
        <ul className="pagination">
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity={currentPage === 1 ? "0.5" : "1"}
            onClick={() => {
              currentPage - 1 >= 1 && pagination(currentPage - 1);
            }}
          >
            <path d="M6 11.5L0.5 6L6 0.5L6 11.5Z" fill="#666666" />
          </svg>

          {pages.map((page, index) => (
            <li
              key={index}
              className={
                page === currentPage
                  ? "page-link pagination-active"
                  : "page-link"
              }
              onClick={() => pagination(page)}
            >
              <p> {page} </p>
            </li>
          ))}
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity={currentPage === pageCount ? "0.5" : "1"}
            onClick={() => {
              currentPage + 1 <= pageCount && pagination(currentPage + 1);
            }}
          >
            <path d="M0 0.5L5.5 6L0 11.5L0 0.5Z" fill="#444444" />
          </svg>
        </ul>
      </nav>  
    </Fragment>
  );
};
export default EmailList;
