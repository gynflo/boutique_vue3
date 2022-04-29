/* eslint-disable vue/require-v-for-key */
<template>
  <div class="p-20">
    <section class="mb-20">
      <h3 class="mb-10">Recherchez :</h3>
      <input
        type="text"
        :value="filters.search"
        @input="emit('updateFilter', {search: ($event.target as HTMLInputElement).value})"
        placeholder="Rechercher"
      />
    </section>
    <section class="mb-20">
      <h3 class="mb-10">Trier par prix :</h3>

      <div
        class="mb-5"
        v-for="(priceRange, id) of ([[0,10000],[800,1000],[1000,1500],[1500,2000],[2000,10000]] as [number,number][])"
        :key="id"
      >
        <input
          :checked="filters.priceRange[0] === priceRange[0]"
          type="radio"
          name="priceRange"
          :id="priceRange[0].toString()"
          @input="emit('updateFilter', { priceRange })"
        />
        <label :for="priceRange[0] + ''">{{
          priceRange[0] === 0
            ? "Tous les prix"
            : priceRange[0] === 2000
            ? "Plus de 2000€"
            : `Entre ${priceRange[0]} € et ${priceRange[1]} €`
        }}</label>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { FilterUpdate, FiltersInterface } from "@/interfaces";

defineProps<{
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate: FilterUpdate): void;
}>();
</script>

<style lang="scss" scoped></style>
