import { getApiBlogPostUrl } from '../constants.mjs';
import { doFetch } from '../doFetch.mjs';

async function fetchPostById(id) {
    const url = getApiBlogPostUrl(`blog/posts/${id}`);
    return await doFetch(url, { method: 'GET' });
}

async function initPostPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        document.querySelector('main').innerHTML = '<p>Post not found</p>';
        return;
    }

    try {
        const post = await fetchPostById(postId);
        const article = document.querySelector('article');

        article.innerHTML = `
            <h1>${post.title}</h1>
            <p>By ${post.author.name} on ${new Date(post.created).toLocaleDateString()}</p>
            <img src="${post.media.imageUrl}" alt="${post.title}">
            <p>${post.body}</p>
        `;
    } catch (error) {
        console.error('Failed to fetch post:', error);
        document.querySelector('main').innerHTML = '<p>Error loading post</p>';
    }
}

initPostPage();
