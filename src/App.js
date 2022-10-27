import "./styles/base.css";
import "./styles/main.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/postForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/loader/Loader";

// ЧАС/МИНУТА : 46 - минута

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, [filter]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  async function fetchPosts() {
    setIsPostsLoading(true);

    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
  }

  return (
    <div className="App">
      {/* <button onClick={fetchPosts}>GET POSTS</button> */}
      <MyButton style={{marginTop: 20}} onClick={() => setModal(true)} >
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} children>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: "center", marginTop: 30 }}>
          <Loader />
          </div>
        : <PostList remove={removePost} posts={sortAndSearchPosts} title="Посты по JS" />
      }
    </div>
  );
}

export default App;
