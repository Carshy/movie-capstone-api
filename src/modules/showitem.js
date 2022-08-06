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

  // displaying the popup window
  const getPopup = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const result = await response.json();
    const popupList = document.createElement('div');
    popupList.classList.add('comment-popup');
    const body = document.querySelector('body');
    popupList.innerHTML = `
    <div class='popup-headers'>
    <div class='image-header'>
    <img src= ${result.image.medium}>
    </div>
    <span class="close-button close">&times;</span>
    </div>
    <div class='series-details'>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    </div>
    <div class='series-attributes'>
    <p>Genre: (${result.genres})</p>
    <p>Premiered on: ${result.premiered}</p>
    <p>Ratings(${result.rating.average})</p>
    </div>
    <div class='comment-top'>
    <p class='comment-title'>Comments</p>
    </div>
    <form class='comment-section' id='comment-form'>
    <ul class="comments-container"></ul>
    <input type='text' class='user-name' id='name' placeholder='Your name'>
    <textarea type='text' class='user-comment' id='added-comment' placeholder='Your insights'></textarea>
    <button class='comment-box add-comment' id=${id} type='submit'>Comment</button>
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
    const addComment = (comments) => {
      const totalcomments = document.querySelector('.comment-title');
      totalcomments.insertAdjacentHTML('beforeend', `(${comments.length})`);
      const commentList = document.querySelector('.comments-container');
      commentList.innerHTML = '';
      comments.forEach((comment) => {
        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
      });
    };

    const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/comments';

    const fetchComments = async (id) => {
      const request = new Request(`${commentURL}?item_id=${id}`);
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error('No comments added for this movie');
      }
      const getComment = await response.json();
      addComment(getComment);
    };

    const totalComments = async (arr) => arr.length;

    // ************************************
    const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/comments';

    const postComment = async (e) => {
      e.preventDefault();
      const movieID = e.target;

      const name = document.getElementById('name').value.trim();
      const addComment = document.getElementById('added-comment').value.trim();
      const commentForm = document.getElementById('comment-form');

      if (name && addComment) {
        const result = await fetch(commentsURL, {
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
    const submitButton = document.querySelector('.add-comment');
    submitButton.addEventListener('click', postComment);
  };
  // Comment eventlisters
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
      displaySeries.style.filter = 'blur(12px)';
    });
  });

  // Posting comments
};
export default showSeriesList;