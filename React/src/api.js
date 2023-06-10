import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID k8ljl7bhBeUyfNP9-UhTO4r3Br5zzXXpE3QJOBdKBbQ',
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
