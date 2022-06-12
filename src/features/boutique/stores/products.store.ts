import { DEFAULT_FILTERS } from "@/shared/data/filters";
import { seed, seed20Articles } from "@/shared/data/seed";
import type {
  FiltersInterface,
  FilterUpdate,
  ProductInterface,
} from "@/shared/interfaces";
import { fetchProductsWithFilter } from "@/shared/services/product.service";
import { defineStore } from "pinia";

interface ProductState {
  products: ProductInterface[];
  filters: FiltersInterface;
  page: number;
  isLoading: boolean;
  moreResults: boolean;
  isLoaded: boolean;
  needRefresh: boolean;
}

export function initialFetchProduct() {
  const productStore = useProducts();
  if (!productStore.isLoaded || productStore.needRefresh) {
    productStore.fetchProduct();
    productStore.isLoaded = true;
    if (productStore.needRefresh) {
      productStore.products = [];
      productStore.page = 1;
      productStore.needRefresh = false;
    }
  }
}

export const useProducts = defineStore("products", {
  state: (): ProductState => ({
    products: [],
    filters: { ...DEFAULT_FILTERS },
    page: 1,
    isLoading: true,
    moreResults: true,
    isLoaded: false,
    needRefresh: false,
  }),
  getters: {
    filteredProducts(state) {
      return state.products.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .startsWith(state.filters.search.toLocaleLowerCase())
      );
    },
  },
  actions: {
    async fetchProduct() {
      this.isLoading = true;
      const products = await fetchProductsWithFilter(this.filters, this.page);
      if (Array.isArray(products)) {
        this.products = [...this.products, ...products];
        if (products.length < 20) {
          this.moreResults = false;
        }
      } else {
        this.products = [...this.products, products];
      }
      this.isLoading = false;
    },
    updateFilter(filterUpdate: FilterUpdate) {
      if (filterUpdate.search !== undefined) {
        this.filters.search = filterUpdate.search;
      } else if (filterUpdate.priceRange) {
        this.filters.priceRange = filterUpdate.priceRange;
      } else if (filterUpdate.category) {
        this.filters.category = filterUpdate.category;
      } else {
        this.filters = { ...DEFAULT_FILTERS };
      }
    },
    incPage() {
      this.page++;
    },
    seed() {
      seed("projetProducts");
      seed20Articles("projetProducts");
    },
  },
});
