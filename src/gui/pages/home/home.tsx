import React from 'react'
import { Toolbar } from '~/gui/components';
import { usePosts } from './hooks';
import { Post } from './components';

export const Home = () => {
    const { posts, fetchPosts } = usePosts()

    return <div>
      <Toolbar>
        App name
      </Toolbar>
      <button 
        onClick={fetchPosts}>
        Get Posts
      </button>
      { 
        posts.map(
          post => <Post  
            key={post.id} 
            title={post.title} />
        )
      }
    </div>
}
