import './App.css'
import PostsLists from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }
  
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main className='react-posts-app'>
        <PostsLists 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
