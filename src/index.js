import './style.css';
import { fetchList, postLikes } from './modules/showlist.js';

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesEntries = await fetchList();
  const displaySeries = document.querySelector('.watchlist');
  const displayItem = document.createElement('div');
  displayItem.classList.add('card-image1');
  for (let entry = 50; entry < 70; entry += 1) {
    displayItem.innerHTML += `
    <div class="card-image" id= ${seriesEntries[entry].id}>
    <img class="show-image" src="${seriesEntries[entry].image.medium}" alt="${seriesEntries[entry].name}">
    <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"></i></p>
    <span class="display"></span>
    <button type="submit" class="comments">Comments</button> 
    </div> 
  `;
    displaySeries.append(displayItem);
  }
  const displayLikes = document.querySelectorAll('.fa-heart');
  const likesDisplay = document.querySelector('.display');
  displayLikes.forEach((like) => {
    let counter = 0;
    like.addEventListener('click', (e) => {
      postLikes(e.target.parentNode.parentNode.id);
      counter += 1;
      e.target.parentNode.nextSibling.textContent = `${counter} likes`;
    });
  });
  for (let i = 50; i < 70; i += 1) {
    const likesList = async () => {
      const likeItems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes');
      const itemList = await likeItems.json();
      const likeItem = document.createElement('div');
      likeItem.innerHTML += `${itemList[i].likes}`;
      likesDisplay.innerHTML += likeItem;
    };
    return (likesDisplay);
  }
  likesList();
};
document.addEventListener('DOMContentLoaded', showSeriesList);
