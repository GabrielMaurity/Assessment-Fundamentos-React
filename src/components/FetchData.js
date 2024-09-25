import axios from 'axios';

const FetchData = (url, setData) => {
  axios
    .get(url)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export default FetchData;
