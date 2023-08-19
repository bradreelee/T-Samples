// code from https://www.daleseo.com/react-pagination/
import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]); // 뿌릴 전체 데이터
  const [limit, setLimit] = useState(10); // 페이지당 표시할 갯수
  const [page, setPage] = useState(1); // 페이지 관리 상태
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>

      {/* 페이지네이션을 통해 구한 값으로 실제 데이터에서 현재 페이지에 해당하는 데이터만 보여주는 코드  */}
      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length} // 전체 데이터 길이
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;
