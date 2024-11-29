import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProductCategories = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories'); // Corrected URL
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
  }
};
