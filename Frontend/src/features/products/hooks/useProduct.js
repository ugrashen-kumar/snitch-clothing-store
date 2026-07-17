import { setProducts, setSellerProducts } from "../state/product.slice.js";
import { createProduct, getAllProducts, getProductById, getSellerProduct } from "../services/product.api.js";
import { useDispatch } from "react-redux";

const useProduct = () => {
  const dispatch = useDispatch();

  const handleCreateProduct = async (formData) => {
    const data = await createProduct(formData);
    return data.product;
  };

  const handleGetSellerProduct = async () => {
    const data = await getSellerProduct();
    dispatch(setSellerProducts(data.products));
    return data.products;
  };

  const handleGetAllProducts = async() =>{
    const data = await getAllProducts()
    console.log(data)
    dispatch(setProducts(data.products))
  }

  const handleGetProductById = async(productId) =>{
    const data = await getProductById(productId)
    return data.product
  }

  return {
    handleCreateProduct,
    handleGetSellerProduct,
    handleGetAllProducts,
    handleGetProductById
  };
};

export default useProduct;
