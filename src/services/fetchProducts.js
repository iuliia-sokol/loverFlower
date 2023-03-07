import axios from 'axios';
import { BASE_URL } from 'utils/consts/consts';

export const fetchProductByQuery = async query => {
  try {
    const res = await axios.get(`${BASE_URL}/api/products?name=${query}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchPopularProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/products?popular=true`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
