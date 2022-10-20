import "./styles/base.css";
import "./styles/main.css";

import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/postForm";
import MySelect from "./components/UI/select/MySelect";

// ЧАС/МИНУТА : 12 - минута

function App() {
  const [posts, setPosts] = useState([
    // { id: 1, title: "Javascript", body: "Description" },
    // { id: 2, title: "Javascript", body: "Description" },
    // { id: 3, title: "Javascript", body: "Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={'Поиск...'}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По заголовку' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Посты по JS" />
        : <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      }

    </div>
  );
}

export default App;
