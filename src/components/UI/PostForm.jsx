import React from "react";
import { useState } from 'react';
import MyInput from "./UI/input/MyInpyt";

function PostForm({create}) {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' });
    }

    return (
        <form >
            {/*управляемый компонент */}
            <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type='text' placeholder='Название' />
            <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type='text' placeholder='Описание' />
            {/*<MyButton onClick={addNewPost}>Create post</MyButton>*/}
            <button onClick={addNewPost}>Create post</button>
        </form>
    )
}
export default PostForm;