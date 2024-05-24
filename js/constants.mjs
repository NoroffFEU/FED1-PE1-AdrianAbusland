const API_BASE_URL = 'https://v2.api.noroff.dev/blog/posts/HotViewLab';

// Function to generate the blog post URL
export const getApiBlogPostUrl = (endpoint) => `${API_BASE_URL}/${endpoint}`;