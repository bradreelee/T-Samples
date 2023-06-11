import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

function App() {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems([...items].concat(Array.from({ length: 20 })));
    }, 500);
  };

  return (
    <div className="App">
      <div style={{width: "600px"}}>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore} // 특정 갯수 이상이면 멈추게끔!
          loader={<h4>Loading...</h4>}
          // height={400} // 400px의 높이를 가진 div안에서만 infinite scroll하게끔!
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items &&
            items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
