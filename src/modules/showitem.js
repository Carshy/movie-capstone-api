import { fetchList, postLikes } from './showlist.js';
import commentCounter from './comment-counter.js';

// eslint-disable-next-line consistent-return
const countItems = (items) => {
  if (Array.isArray(items)) {
    return items.length;
  }
};

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesResults = await fetchList();
  const displaySeries = document.querySelector('.watchlist');
  const seriesEntries = seriesResults.slice(49, 69);
  const displayItem = document.createElement('div');
  for (let entry = 0; entry < seriesEntries.length; entry += 1) {
    displayItem.classList.add('card-image1');
    displayItem.innerHTML += `
      <div class="card-image" id= ${seriesEntries[entry].id}>
      <img class="show-image" src="${seriesEntries[entry].image.original}" alt="${seriesEntries[entry].name}">
      <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"><span class="display" data-index="${seriesEntries[entry].index}" data-id="${seriesEntries[entry].id}">0</span></i></p>
      <button type="submit" class="comments">Comments</button> 
      </div> 
    `;
    displaySeries.append(displayItem);
  }

  const displayItems = document.querySelector('.list-items1');
  const length = countItems(seriesEntries);
  displayItems.textContent = `All Movies (${length})`;

  const displayLikes = document.querySelectorAll('.fa-heart');
  displayLikes.forEach((like) => {
    like.addEventListener('click', (e) => {
      postLikes(e.target.parentNode.parentNode.id);
      e.target.childNodes[0].textContent = parseInt(e.target.childNodes[0].textContent, 10) + 1;
    });
  });
  const likeItems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes');
  const itemList = await likeItems.json();
  itemList.forEach((item) => {
    const likeItem = document.querySelector(`[data-id = '${item.item_id}']`);
    likeItem.innerHTML = `${item.likes}`;
  });

  // displaying the popup window
  const getPopup = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const result = await response.json();
    const popupList = document.createElement('div');
    popupList.classList.add('comment-popup');
    const body = document.querySelector('body');
    popupList.innerHTML = `
    <p class="close-button close">&times;</p>
    <div class='image-header'>
    <img src= ${result.image.original}></div>
    <div class='series-details'>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    </div>
    <div class='series-attributes'>
    <p>Genre: (${result.genres})</p>
    <p>Premiered on: ${result.premiered}</p>
    <p>Ratings(${result.rating.average})</p>
    </div>
    <div class='comment-placeholder'>
    <p>Comments<span class='comment-title'></span></p>
    <ul class="comments-holder"></ul>
    </div>
    <form class='comment-section' id='comment-form'>
    <input type='text' class='user-name' id='user-name' placeholder='Your name'>
    <textarea type='text' class='user-comment' id='add-comment' placeholder='Your insights'></textarea>
    <button class='comment-box' id=${id} type='submit'>Comment</button>
    </form>
    `;
    body.append(popupList);
    // Close button
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      displaySeries.style.filter = 'blur(0)';
      const body = document.querySelector('body');
      body.removeChild(body.lastChild);
    });

    // Posting Comments Space
    const createComment = (comments) => {
      const testCounter = commentCounter(comments);
      const commentCount = document.querySelector('.comment-title');
      commentCount.innerHTML = `(${testCounter})`;
      const commentList = document.querySelector('.comments-holder');
      commentList.innerHTML = '';
      comments.forEach((comment) => {
        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
      });
    };

    const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Rsc5dWsUkxFOihStX7m/comments';

    const fetchComments = async (id) => {
      const request = new Request(`${apiCommentURL}?item_id=${id}`);
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error('No comments added for this movie');
      }
      const getComment = await response.json();
      createComment(getComment);
    };

    // ************************************

    const displayComment = async (e) => {
      e.preventDefault();
      const movieID = e.target;

      const name = document.getElementById('user-name').value.trim();
      const addComment = document.getElementById('add-comment').value.trim();
      const commentForm = document.getElementById('comment-form');

      if (name && addComment) {
        const result = await fetch(apiCommentURL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            item_id: `${movieID.id}`,
            username: `${name}`,
            comment: `${addComment}`,
          }),
        });
        commentForm.reset();
        await result.text();
        fetchComments(movieID.id);
      }
    };
    fetchComments(id);
    const submitComment = document.querySelector('.comment-box');
    submitComment.addEventListener('click', displayComment);
  };

  // Comment eventlisters
  const commentBtns = document.getElementsByClassName('comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
      displaySeries.style.filter = 'blur(12px)';
    });
  });

  // Posting comments
};
export { showSeriesList, countItems };
// eslint-disable-next-line consistent-return
