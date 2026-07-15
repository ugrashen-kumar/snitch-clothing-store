import { setProducts, setSellerProducts } from "../state/product.slice.js";
import { createProduct, getSellerProduct } from "../services/product.api.js";
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

  return {
    handleCreateProduct,
    handleGetSellerProduct,
  };
};

export default useProduct;
