<script setup lang="ts">
import CartProductList from "./CartProductList.vue";
import Calc from "@/components/Calc-component.vue";

import type { ProductCartInterface } from "@/shared/interfaces";
import { computed, reactive } from "vue";

const state = reactive<{
  open: boolean;
}>({
  open: false,
});

const props = defineProps<{
  cart: ProductCartInterface[];
}>();
const emit = defineEmits<{
  (e: "removeProductFromCart", productId: string): void;
}>();
const totalPrice = computed(() =>
  props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
);
</script>

<template>
  <div class="cart-container">
    <transition mode="out-in">
      <div
        class="cart-holder d-flex justify-content-center align-items-center"
        v-if="!state.open"
        @click="state.open = !state.open"
      >
        <i class="uil uil-shopping-basket"></i>
        <span class="tag">{{ cart.length }}</span>
      </div>
      <div v-else>
        <Calc :open="state.open" @close="state.open = false" />
        <div class="d-flex flex-column p-20 card ml-20">
          <h2 class="mb-10">Panier :</h2>
          <CartProductList
            class="flex-fill"
            :cart="props.cart"
            @remove-product-from-cart="emit('removeProductFromCart', $event)"
          />
          <button class="btn btn-success">Commander ({{ totalPrice }}€)</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.cart-container {
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 2;
}

.tag {
  width: 18px;
  font-size: 10px;
  text-align: center;
  line-height: 18px;
  vertical-align: middle;
  border-radius: 50%;
  color: var(--white);
  background-color: var(--danger-1);
  position: absolute;
  top: 0;
  right: 0;
}

.cart-holder {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--primary-1);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--primary-2);
  }
  i {
    font-size: 20px;
    color: var(--white);
  }
}
.v-leave-to,
.v-enter-from {
  transform: translateY(10px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}
</style>
