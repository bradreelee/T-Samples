import React, { useState, useMemo } from "react";
import Pagination from "./pagination-with-dots/Pagination";
import sampleData from "./data/mock-data.json";
import "./style.scss";

// code completely from https://github.com/mayankshubham/react-pagination
// currently

// 1. 한 페이지에 표시되는 아이템의 갯수
//////////////////////////////////////////////////////////////////////////
let PageSize = 10;
//////////////////////////////////////////////////////////////////////////

export default function App() {
  // 2. 페이지 관리용 상태값
  //////////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  // 3. 데이터 세팅 함수
  // 화면에 뿌릴 데이터
  const [data, setData] = useState(sampleData.slice(0, 100));

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);
  //////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {/* ///////////////////////////////////// */}
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
          {/* ///////////////////////////////////// */}
        </tbody>
      </table>
      {/* ///////////////////////////////////// */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      {/* ///////////////////////////////////// */}
    </div>
  );
}
