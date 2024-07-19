document.addEventListener("DOMContentLoaded", function() {
    const blogPostsContainer = document.getElementById('blog-posts');

    async function fetchBlogPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            displayBlogPosts(posts);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    }

    function displayBlogPosts(posts) {
        blogPostsContainer.innerHTML = '';
        posts.slice(0, 10).forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <a href="#">Read more...</a>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    fetchBlogPosts();
});
