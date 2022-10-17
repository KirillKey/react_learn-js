import "./styles/base.css";
import "./styles/main.css";

import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

// 58 минута

function App() {
  const [posts, setPosts] = useState([
    // { id: 1, title: "Javascript", body: "Description" },
    // { id: 2, title: "Javascript", body: "Description" },
    // { id: 3, title: "Javascript", body: "Description" },
  ]);
  const [post, setPost] = useState({ title: "", body: "", });

  function addNewPost(e) {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "", });
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text"
          onChange={e => setPost({ ...post, title: e.target.value })}
          value={post.title}
          placeholder="Название поста" />
        {/* НЕ управляемый компонент */}
        {/* <MyInput type="text"
          placeholder="Описание поста"
          ref={bodyInputRef}
        /> */}
        <MyInput type="text"
          onChange={e => setPost({ ...post, body: e.target.value })}
          value={post.body}
          placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <div className="Post">
        <PostList posts={posts} title="Посты по JS" />
      </div>
    </div>
  );
}

export default App;
