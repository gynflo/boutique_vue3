import { useProducts } from "@/features/boutique/stores/products.store";
import type {
  ProductFormInterface,
  ProductInterface,
} from "@/shared/interfaces";
import {
  addProduct,
  fetchProducts,
  editProduct,
  tryDeleteProduct,
} from "@/shared/services/product.service";
import { defineStore } from "pinia";

interface AdminProductState {
  products: ProductInterface[];
  isLoading: boolean;
  isLoaded: boolean;
}

export const useAdminProducts = defineStore("adminProduct", {
  state: (): AdminProductState => ({
    products: [],
    isLoading: false,
    isLoaded: false,
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      const products = await fetchProducts();
      if (Array.isArray(products)) {
        this.products = products;
      } else this.products = [products];
      this.isLoading = false;
    },
    async addProduct(productForm: ProductFormInterface) {
      const productStore = useProducts();
      const product = await addProduct(productForm);
      if (product) {
        productStore.needRefresh = true;
        this.products.push(product);
      }
    },
    async editProduct(productId: string, productForm: ProductFormInterface) {
      const productStore = useProducts();
      const editedProduct = await editProduct(productId, productForm);
      if (editedProduct) {
        productStore.needRefresh = true;
        const stateProductIndex = this.products.findIndex(
          (p) => p._id === productId
        );
        this.products[stateProductIndex] = editedProduct;
      }
    },

    async deleteProduct(productId: string) {
      const productIndex = this.products.findIndex((t) => t._id === productId);
      if (productIndex !== -1) {
        await tryDeleteProduct(productId);
      }
      this.products.splice(productIndex, 1);
    },
  },
});

export function initialFetchAdminProduct() {
  const adminStoreProduct = useAdminProducts();
  if (!adminStoreProduct.isLoaded) {
    adminStoreProduct.fetchProducts();
    adminStoreProduct.isLoaded = true;
  }
}
