// Fetching the base API
const apiBaseUrl = 'https://api.tvmaze.com/shows';
const fetchList = async () => {
  const response = await fetch(apiBaseUrl);
  const seriesList = await response.json();
  return seriesList;
};
export default fetchList;