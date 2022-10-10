<template>
  <div class="locale-changer">
    <v-select
      :label="t('language')"
      :items="availableLocales"
      :model-value="[locale]"
      @update:model-value="setLocale"
    ></v-select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale, availableLocales, t } = useI18n();

const setLocale = (l: string) => (locale.value = l);
</script>
