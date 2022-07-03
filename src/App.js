import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      let data = await fetch(
        "http://kongserver-env.eba-qbbmwpcq.ap-northeast-2.elasticbeanstalk.com/posts"
      );
      data = await data.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>티민의 github Actions CI/CD 파이프라인 수정사항도 반영되냐!</h1>
      <ul style={{ listStyle: "none" }}>
        {posts.map((p) => (
          <li key={p.id}>
            <h4>
              {p.id} {p.title}
            </h4>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
