const fetchList = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const userlist = await response.json();
  return userlist;
};

const movieList = document.querySelector('.watchlist');
const showList = (list) => {
  for (let i = 0; i < list.length; i += 1) {
    const movieId = document.createElement('div');
    movieId.classList.add('card-image');
    movieId.id = list[i].id;
    movieId.style.backgroundImage = `url('${list[i].image.medium}')`;
    movieId.innerHTML += `
    <div class="title">
    <p>${list[i].name}</p> <i class="fa fa-gittip"></i></div>
    <button type="button" class="comments" >
    Comments</button>
    `;
    movieList.append(movieId);
  }
};

export { fetchList, showList };