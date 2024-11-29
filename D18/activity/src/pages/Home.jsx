import { useEffect, useState } from "react";
import { getProducts, getProductCategories, getProductsByCategory } from "@/helpers";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]); // Store products for display
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all products and categories
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetch
      try {
        const productsData = await getProducts();
        setProducts(productsData); // Set initial products to state
        const categoriesData = await getProductCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, []);

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const isSearchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  const handleCategoryChange = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category) {
      const productsByCategory = await getProductsByCategory(category);
      setProducts(productsByCategory);
    } else {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
  };

  return (
    <div className="container">
      {/* Search Field */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Select */}
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center my-5">
            <p>No results found</p>
          </div>
        ) : (
          <div className="row g-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
