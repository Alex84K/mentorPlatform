import React from "react"
import PostItem from "./PostItem";

function PostList({ posts, remove }) {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
        )
    }

    return (
        <div>
                {posts.map((post, index) => <PostItem key={post.id} remove={remove} number={index + 1} post={post}  />)}           
        </div>
    )
}
export default PostList;