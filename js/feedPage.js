import { getApiBlogPostUrl } from './constants.mjs';
import { doFetch } from './doFetch.mjs';

async function fetchPosts() {
    const url = getApiBlogPostUrl('blog/posts');
    return await doFetch(url, { method: 'GET' });
}

async function generateCarousel(posts) {
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carouselContainer');
    posts.slice(0, 3).forEach((post, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carouselItem');
        if (index === 0) carouselItem.classList.add('active');

        const bannerImg = document.createElement('img');
        bannerImg.classList.add('bannerImg');
        bannerImg.src = post.media.imageUrl;
      
        const title = document.createElement('h2');
        title.textContent = post.title;

        const openButton = document.createElement('button');
        openButton.textContent = 'Read More';
        openButton.addEventListener('click', () => {
            window.location.href = `../post/index.html?postId=${post.id}`;
        });

        carouselItem.appendChild(bannerImg);
        carouselItem.appendChild(title);
        carouselItem.appendChild(openButton);
        carouselContainer.appendChild(carouselItem);
    });

    const prevButton = document.createElement('button');
    prevButton.textContent = '❮';
    prevButton.classList.add('carouselButton', 'prevButton');
    prevButton.addEventListener('click', showPrevSlide);

    const nextButton = document.createElement('button');
    nextButton.textContent = '❯';
    nextButton.classList.add('carouselButton', 'nextButton');
    nextButton.addEventListener('click', showNextSlide);

    const bannerCarouselSection = document.querySelector('.bannerCarouselSection');
    bannerCarouselSection.appendChild(prevButton);
    bannerCarouselSection.appendChild(carouselContainer);
    bannerCarouselSection.appendChild(nextButton);
}

function showPrevSlide() {
    const activeItem = document.querySelector('.carouselItem.active');
    let prevItem = activeItem.previousElementSibling;
    if (!prevItem || !prevItem.classList.contains('carouselItem')) {
        prevItem = document.querySelector('.carouselItem:last-child');
    }
    activeItem.classList.remove('active');
    prevItem.classList.add('active');
}

function showNextSlide() {
    const activeItem = document.querySelector('.carouselItem.active');
    let nextItem = activeItem.nextElementSibling;
    if (!nextItem || !nextItem.classList.contains('carouselItem')) {
        nextItem = document.querySelector('.carouselItem:first-child');
    }
    activeItem.classList.remove('active');
    nextItem.classList.add('active');
}

async function generateStaticGrid(posts) {
    const staticGridSection = document.querySelector('.staticGridSection');
    posts.slice(0, 12).forEach((post) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');

        const img = document.createElement('img');
        img.src = post.media.imageUrl;

        const title = document.createElement('h3');
        title.textContent = post.title;

        gridItem.appendChild(img);
        gridItem.appendChild(title);
        gridItem.addEventListener('click', () => {
            window.location.href = `../post/index.html?postId=${post.id}`;
        });

        staticGridSection.appendChild(gridItem);
    });
}

async function initFeedPage() {
    try {
        const posts = await fetchPosts();
        const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));

        generateCarousel(sortedPosts);
        generateStaticGrid(sortedPosts);
    } catch (error) {
        console.error('Failed to initialize feed page:', error);
        document.querySelector('main').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

initFeedPage();

