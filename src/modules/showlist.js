const movieList = document.querySelector('.watchlist');
const fetchList = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  try {
    const res = await response.json();
    for (let list = 20; list < 45; list += 1) {
      const movieId = document.createElement('div');
      movieId.classList.add('card-image');
      movieId.id = list.id;
      movieId.style.backgroundImage = `url('${list.image.medium}')`;
      movieId.innerHTML += `
      <div class="title">
      <p>${list.name}</p> <i class="fa fa-gittip"></i></div>
      <button type="button" class="comments" >
      Comments</button>
      `;
      movieList.append(movieId);
    }
    } catch (error) {
      return error;
    }
};

export default {fetchList}