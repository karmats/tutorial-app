<template>
  <v-container>
    <FormKit type="form" v-model="data" @submit="handleSubmit">
      <FormKitSchema :schema="schema" :data="data" />
    </FormKit>
    <pre>{{ data }}</pre>
  </v-container>
</template>

<script lang="ts" setup>
import type { MessagesSchema } from "@/i18n/messages.model";
import { FormKitSchema } from "@formkit/vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n<[MessagesSchema]>();

const schema = [
  {
    $formkit: "text",
    name: "name",
    label: t("forms.full-name"),
    placeholder: t("forms.full-name-placeholder"),
  },
  {
    $formkit: "checkbox",
    name: "hasEmail",
    label: t("forms.has-email"),
  },
  {
    $formkit: "select",
    name: "fruit",
    label: t("forms.favourite-fruit"),
    placeholder: t("forms.favourite-fruit-placeholder"),
    options: ["🍒", "🍓", "🍉"],
    validation: "required",
  },
  {
    $el: "p",
    children: [t("forms.email-enabled") + " ", "$hasEmail"],
  },
  {
    $formkit: "email",
    name: "email",
    label: t("forms.email"),
    if: "$hasEmail",
    validation: "required|email",
  },
];

const data = ref({
  name: null,
  email: null,
  hasEmail: false,
});

const handleSubmit = () => alert("Valid submit!");
</script>
