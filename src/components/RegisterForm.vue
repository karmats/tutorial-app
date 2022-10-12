<template>
  <v-form v-model="valid" @submit.prevent="$emit('formSubmitted', userData)">
    <span>{{ t("hello") }}</span>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.firstName"
            :rules="nameRules"
            :counter="10"
            :label="t('register-form.first-name')"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.lastName"
            :rules="nameRules"
            :counter="10"
            :label="t('register-form.last-name')"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.email"
            :rules="emailRules"
            :label="t('register-form.email')"
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
import { reactive, ref } from "vue";
import type { RegisterUser } from "@/models/register-user";
import { useI18n } from "vue-i18n";
import type { MessagesSchema, SupportedLocales } from "@/i18n/messages.model";

defineEmits<{ (e: "formSubmitted", user: RegisterUser): void }>();

const { t } = useI18n<[MessagesSchema], SupportedLocales>();
const valid = ref(false);
const userData = reactive<RegisterUser>({
  firstName: "",
  lastName: "",
  email: "",
});

const nameRules = ref([
  (v: string) => !!v || t("register-form.name-required"),
  (v: string) => v.length <= 10 || t("register-form.name-valid"),
]);
const emailRules = ref([
  (v: string) => !!v || t("register-form.email-required"),
  (v: string) => /.+@.+/.test(v) || t("register-form.email-valid"),
]);
</script>
