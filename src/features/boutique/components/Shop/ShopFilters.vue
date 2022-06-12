<script setup lang="ts">
import type {
  FilterUpdate,
  FiltersInterface,
  Category,
} from "@/shared/interfaces";

defineProps<{
  filters: FiltersInterface;
  nbrOfResults: number;
}>();

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate: FilterUpdate): void;
}>();
</script>

<template>
  <div class="d-flex flex-column p-20">
    <!-- section filtered name -->
    <section class="mb-20">
      <h3 class="mb-10">Recherchez :</h3>
      <input
        type="text"
        :value="filters.search"
        @input="emit('updateFilter', {search: ($event.target as HTMLInputElement).value})"
        placeholder="Rechercher"
      />
    </section>
    <!-- section filtered price -->
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
          :id="priceRange[0] + ''"
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
    <!-- section filtered category -->
    <section class="mb-20 flex-fill">
      <h3 class="mb-10">Trier par categories :</h3>
      <p
        :class="{ selected: category === filters.category }"
        class="category"
        v-for="(category, id) in (['all', 'desktop', 'gamer', 'streaming'] as Category[])"
        :key="id"
        @click="emit('updateFilter', { category })"
      >
        {{ category }}
      </p>
    </section>
    <small class="mb-5"
      >Nombre de résultats: <strong>{{ nbrOfResults }}</strong></small
    >
    <button class="btn btn-danger m-20" @click="emit('updateFilter', {})">
      Supprimer les filtres
    </button>
  </div>
</template>

<style lang="scss" scoped>
.category {
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    font-size: 20px;
    font-weight: 700;
  }
}

.selected {
  font-size: 20px;
  font-weight: 700;
  text-decoration: underline;
}
</style>
