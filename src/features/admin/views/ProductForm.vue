<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/Product.interface";
import {
  addProduct,
  editProduct,
  getProductById,
} from "@/shared/services/product.service";
import { toFormValidator } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { z } from "zod";

const product = ref<ProductInterface | null>(null);
const firstInput = ref<HTMLInputElement | null>(null);
const required = { required_error: "Veuillez renseigner ce champ" };

const route = useRoute();
const router = useRouter();
if (route.params.productId) {
  product.value = await getProductById(route.params.productId as string);
  console.log(product.value);
}

const initialValues = {
  title: product.value ? product.value.title : "",
  image: product.value ? product.value.image : "",
  price: product.value ? product.value.price : 0,
  description: product.value ? product.value.description : "",
  category: product.value ? product.value.category : "desktop",
};

onMounted(() => {
  firstInput.value?.focus;
});

// 1/ Déclaration du Schema
const validationSchema = toFormValidator(
  z.object({
    title: z
      .string(required)
      .min(1, { message: "Le titre doit faire au moins 1 caractère" })
      .max(20, { message: "Le titre doit comporter moins de 20 caractères" }),
    image: z.string(required),
    price: z
      .number(required)
      .min(0, { message: "Le prix doit etre superieur à 0" })
      .max(15000, { message: "Le prix ne peut excéder 15000€" }),
    description: z
      .string(required)
      .min(1, {
        message: "La description doit comporter plus de 1 caractere",
      })
      .max(100, {
        message: "La description ne peux excéder plus de 100 caracteres",
      }),
    category: z.string(required),
  })
);

// 2/ Utilisation de la ref schema en option de la méthode useForm()
const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
});

// 3/Définition des champs
const title = useField("title");
const image = useField("image");
const price = useField("price");
const description = useField("description");
const category = useField("category");

// 4/ Validation
const trySubmit = handleSubmit(async (formValues) => {
  try {
    if (!product.value) {
      await addProduct(formValues);
    } else {
      await editProduct(product.value._id, formValues);
    }
    router.push("/admin/productlist");
    firstInput.value?.focus;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="card">
    <h3 class="mb-10">
      {{
        product ? `Editer le produit ${product.title}` : "Ajouter un produit"
      }}
    </h3>
    <form @submit="trySubmit">
      <!-- Title -->
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Titre</label>
        <input ref="firstInput" type="text" v-model="title.value.value" />
        <small class="form-error" v-if="title.errorMessage.value">{{
          title.errorMessage.value
        }}</small>
      </div>
      <!-- image -->
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Image</label>
        <input type="text" v-model="image.value.value" />
        <small class="form-error" v-if="image.errorMessage.value">{{
          image.errorMessage.value
        }}</small>
      </div>
      <!-- price -->
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Prix</label>
        <input type="number" v-model="price.value.value" />
        <small class="form-error" v-if="price.errorMessage.value">{{
          price.errorMessage.value
        }}</small>
      </div>
      <!-- description -->
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Description</label>
        <textarea
          placeholder="Maximum 100 caratères"
          rows="5"
          v-model="(description.value.value as string)"
        ></textarea>
        <small class="form-error" v-if="description.errorMessage.value">{{
          description.errorMessage.value
        }}</small>
      </div>
      <!-- category -->
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Categorie</label>
        <select v-model="category.value.value">
          <option value>Choississez une catégorie</option>
          <option value="gamer">Jeux</option>
          <option value="streaming">Stream</option>
          <option value="desktop">Bureautique</option>
        </select>
        <small class="form-error" v-if="category.errorMessage.value">{{
          category.errorMessage.value
        }}</small>
      </div>
      <button class="btn btn-primary" :dissabled="isSubmitting">
        Sauvegarder
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>
