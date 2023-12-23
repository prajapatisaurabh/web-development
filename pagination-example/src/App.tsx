import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // a fake async api call which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      const newData = Array.from(
        { length: 20 },
        (_, index) => `Item #${state.length + index}`
      );
      setState((prev) => [...prev, ...newData]);

      // If newData length is less than 20, it means no more data to fetch
      if (newData.length < 20) {
        setHasMore(false);
      }
    }, 1500);
  };

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

  return (
    <div className="App">
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={state.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {state.map((item, index) => (
            <div style={style} key={index}>
              {index}_{item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
