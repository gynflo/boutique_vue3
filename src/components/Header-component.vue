<script setup lang="ts">
import { reactive } from "vue";
import Calc from "@/components/Calc-component.vue";

const state = reactive<{
  isOpen: boolean;
}>({
  isOpen: false,
});
</script>

<template>
  <header class="d-flex flex-row align-items-center px-20">
    <a href="#" class="d-flex flex-row align-items-center mr-20">
      <img src="@/assets/icon/logo.svg" alt="Home" />
      <span class="logo">Demo</span>
    </a>
    <div class="d-flex align-items-center flex-fill actions-container">
      <ul class="d-flex flex-fill hide-xs">
        <li class="mr-10">
          <router-link to="/boutique">Boutique</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
      <ul class="d-flex hide-xs">
        <li class="mr-10">
          <a href="#">Inscription</a>
        </li>
        <li>
          <a href="#">Connexion</a>
        </li>
      </ul>
      <div class="menu-xs-container">
        <Calc
          :open="state.isOpen"
          @close="state.isOpen = false"
          :transparent="true"
        />
        <i class="uil uil-bars" @click="state.isOpen = !state.isOpen"></i>
        <Transition>
          <ul
            class="menu card"
            @click="state.isOpen = false"
            v-if="state.isOpen"
          >
            <li>
              <router-link to="/bouitque">Boutique</router-link>
            </li>
            <li>
              <router-link to="/admin">Admin</router-link>
            </li>
            <li>
              <a href="#">Inscription</a>
            </li>
            <li>
              <a href="#">Connexion</a>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/mixin";
header {
  background-color: var(--primary-1);
  a {
    color: var(--text-primary-color-1);
    img {
      width: 20px;
      margin-right: 5px;
    }
    .logo {
      font-size: 20px;
      font-weight: bold;
    }
  }
  i {
    @include mixin.sm {
      display: none;
    }
    justify-self: end;
    font-size: 28px;
    cursor: pointer;
  }

  .menu-xs-container {
    position: relative;
  }

  .actions-container {
    @include mixin.xs {
      justify-content: end;
    }
  }
  .menu {
    position: absolute;
    top: 20px;
    right: 0px;
    li {
      padding: 10px;
    }
    a {
      color: var(--text-color);
    }
  }
  .v-leave-to,
  .v-enter-from {
    transform: translateY(-10px);
    opacity: 0;
  }

  .v-leave-active,
  .v-enter-active {
    transition: all 0.2s;
  }
}
</style>
