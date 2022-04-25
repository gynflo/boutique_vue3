<template>
  <header class="d-flex flex-row align-items-center px-20">
    <a href="#" class="d-flex flex-row align-items-center mr-20">
      <img src="../assets/logo.svg" alt="Home" />
      <span class="logo">Demo</span>
    </a>
    <ul class="d-flex flex-row flex-fill">
      <li class="mr-10">
        <a href="#">Boutique</a>
      </li>
      <li>
        <a href="#">Admin</a>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <a href="#">Inscription</a>
      </li>
      <li>
        <a href="#">Connexion</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
  ul {
  }
}
</style>
