// Fetching the base API
const apiBaseUrl = 'https://api.tvmaze.com/shows';
const fetchList = async () => {
  const response = await fetch(apiBaseUrl);
  const seriesList = await response.json();
  return seriesList;
};

const apiInvolvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes';
const postLikes = async (id) => {
  const response = await fetch(apiInvolvementUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: `${id}` }),
  });
  const postedLikes = await JSON.parse(JSON.stringify(response));

  return postedLikes;
};
export { fetchList, postLikes };
