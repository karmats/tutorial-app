<template>
  <v-form v-model="valid" @submit.prevent="$emit('formSubmitted', userData)">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.firstName"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.lastName"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit" :disabled="!valid">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import type { RegisterUser } from "@/models/register-user";
import { reactive, ref } from "vue";

defineEmits<(e: "formSubmitted", user: RegisterUser) => void>();

const valid = ref(false);
const userData = reactive<RegisterUser>({
  firstName: "",
  lastName: "",
  email: "",
});

const nameRules = ref([
  (v: string) => !!v || "Name is required",
  (v: string) => v.length <= 10 || "Name must be less than 10 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
]);
</script>
