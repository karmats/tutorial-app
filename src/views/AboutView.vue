<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ t("about") }}</h1>
      </v-col>
      <v-col cols="12">
        <ProfileCard :user-name="currentUser"></ProfileCard>
      </v-col>
      <v-col cols="12">
        <UsersList @user-selected="changeUser" />
      </v-col>
      <!-- <v-col cols="12">
        <UsersListDefineComponent @user-selected="changeUser" />
      </v-col> -->
      <v-col cols="12">
        <RegisterForm @form-submitted="registerUser"></RegisterForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import ProfileCard from "@/components/ProfileCard.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import UsersList from "@/components/UsersList.vue";
// import UsersListDefineComponent from "@/components/UsersListDefineComponent.vue";
import type { MessagesSchema, SupportedLocales } from "@/i18n/messages.model";
import type { RegisterUser } from "@/models/register-user";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const currentUser = ref("karmats");

const { t } = useI18n<[MessagesSchema], SupportedLocales>();

const changeUser = (user: string) => (currentUser.value = user);

const registerUser = (user: RegisterUser) => {
  alert(JSON.stringify(user));
};
</script>
