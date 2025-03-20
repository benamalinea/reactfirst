import axios from 'axios';

const ProductService = {
    fetchProducts: () => {
        return axios.get('/api/products'); // Update with actual backend endpoint
    },
    // Add more service methods as needed
};

export default ProductService;
