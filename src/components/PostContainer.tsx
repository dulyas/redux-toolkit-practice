import React, { useEffect, useState } from 'react';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../store/models/IPost';


const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(100)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()

    const handleCreate = async () => {
        const title = 'test'
        const body = 'body'
        await createPost({
            title,
            body
        } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка</h1>}
                {error && <h1>Ошибка</h1>}
                {posts && posts.map(post => 
                    <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate} />
                    )}
            </div>
        </div>
    );
};

export default PostContainer;