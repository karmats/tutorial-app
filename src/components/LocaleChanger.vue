<template>
  <div class="locale-changer">
    <v-select
      :label="t('language')"
      :items="supportedLocales"
      :model-value="(locale as any)"
      @update:model-value="updateLocale"
    ></v-select>
  </div>
</template>

<script lang="ts" setup>
import { loadLocaleMessages, SUPPORTED_LOCALES } from "@/i18n/load-locale";
import type { MessagesSchema, SupportedLocales } from "@/i18n/messages.model";
import { useI18n } from "vue-i18n";

const supportedLocales = SUPPORTED_LOCALES;
const i18n = useI18n<[MessagesSchema], SupportedLocales>();
const { locale, t } = i18n;

const updateLocale = async (l: SupportedLocales) => {
  await loadLocaleMessages(i18n, l);
  locale.value = l;
};
</script>
