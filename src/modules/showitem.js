import { fetchList, postLikes } from './showlist.js';
// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesResults = await fetchList();
  const displaySeries = document.querySelector('.watchlist');
  const seriesEntries = seriesResults.slice(49, 73);
  const displayItem = document.createElement('div');
  for (let entry = 0; entry < seriesEntries.length; entry += 1) {
    displayItem.classList.add('card-image1');
    displayItem.innerHTML += `
      <div class="card-image" id= ${seriesEntries[entry].id}>
      <img class="show-image" src="${seriesEntries[entry].image.medium}" alt="${seriesEntries[entry].name}">
      <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"></i><span class="display" data-index="${seriesEntries[entry].index}" data-id="${seriesEntries[entry].id}">0</span></p>
      <button type="submit" class="comments">Comments</button> 
      </div> 
    `;
    displaySeries.append(displayItem);
  }

  const displayItems = document.querySelector('.list-items1');
  displayItems.textContent = `All Movies (${seriesEntries.length})`;
  const displayLikes = document.querySelectorAll('.fa-heart');
  displayLikes.forEach((like) => {
    like.addEventListener('click', (e) => {
      postLikes(e.target.parentNode.parentNode.id);
      e.target.nextSibling.textContent = parseInt(e.target.nextSibling.textContent, 10) + 1;
    });
  });
  const likeItems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes');
  const itemList = await likeItems.json();
  itemList.forEach((item) => {
    const likeItem = document.querySelector(`[data-id = '${item.item_id}']`);
    likeItem.innerHTML = `${item.likes}`;
  });
};
export default showSeriesList;
