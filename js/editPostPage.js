import { getApiBlogPostUrl } from '../constants.mjs';
import { doFetch } from '../doFetch.mjs';

async function fetchPostById(id) {
    const url = getApiBlogPostUrl(`blog/posts/${id}`);
    return await doFetch(url, { method: 'GET' });
}

async function updatePost(id, data) {
    const url = getApiBlogPostUrl(`blog/posts/${id}`);
    return await doFetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
}

async function deletePost(id) {
    const url = getApiBlogPostUrl(`blog/posts/${id}`);
    return await doFetch(url, { method: 'DELETE' });
}

async function initEditPostPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        document.querySelector('main').innerHTML = '<p>Post not found</p>';
        return;
    }

    try {
        const post = await fetchPostById(postId);

        const form = document.getElementById('editPostForm');
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postBody').value = post.body;
        document.getElementById('postMedia').value = post.media.imageUrl;

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const updatedData = {
                title: form.title.value,
                body: form.body.value,
                media: { imageUrl: form.media.value }
            };
            await updatePost(postId, updatedData);
            alert('Post updated successfully!');
        });

        document.getElementById('deletePost').addEventListener('click', async () => {
            await deletePost(postId);
            alert('Post deleted successfully!');
            window.location.href = '../index.html';
        });

    } catch (error) {
        console.error('Failed to fetch post:', error);
        document.querySelector('main').innerHTML = '<p>Error loading post</p>';
    }
}

initEditPostPage();
