<script setup lang="ts">
  import { ref, computed, Ref, onMounted } from "vue";

  import { getUsers, getCurrentUser as getCurrentUserApi } from "./helpers/api";

  import { User } from "../types/api.types.ts";

  import Container from "./components/Container/Container.vue";
  import Row from "./components/Row/Row.vue";
  import Col from "./components/Col/Col.vue";


  import FieldInput from "./components/Input/FieldInput.vue";
  import Icon from "./components/Icon/Icon.vue";
  import List from "./components/List/List.vue";
  import ListItem from "./components/List/ListItem.vue";

  import PopUpUser from "./components/PopUp/PopUpUser.vue";
  import Card from "./components/Card/Card.vue";
  import Magnify from "./assets/magnify.svg";

  const inputUserName: Ref<string> = ref(""),
  openUserPopUp: Ref<boolean> = ref<boolean>(false),
  users: Ref<User[]> = ref<User[]>([]);

  const isLoadingUsers = ref<boolean>(true);

  const currentUser: Ref<Partial<User>> = ref<Partial<User>>();
    
  const filterUserByName = computed<User[]>(() => users.value.filter(user => user.name.toLowerCase().match(inputUserName.value.toLowerCase())));

  const getCurrentUser = async () => {
    isLoadingUsers.value = true;

    try {
      const { data } = await getCurrentUserApi(inputUserName.value);

      users.value = data;

      return isLoadingUsers.value = false;
    }
    catch(err) {
      return console.error(err);
    };
  };

  const getAllUsers = async () => {
    isLoadingUsers.value = true;

    const { data } = await getUsers();

    users.value = data;

    return isLoadingUsers.value = false;
  };

  const toggleUserPopUp = (user: User): void => {
    openUserPopUp.value = !openUserPopUp.value;
    currentUser.value = user;

  }; 

  onMounted(async () => {
    try {
      await getAllUsers();
    }
    catch(err) {
      console.error(err);
    };
  });
</script>

<template>
  <Container class="wrapper">
    <header>
      <FieldInput 
        full
        v-model="inputUserName"
        @change="getCurrentUser" 
      >
        <template #icon-prepend>

          <Magnify />

        </template>

      </FieldInput>
    </header>

    <Row 
      justify-content="center"
      tag="main"
      gy="2"
    >
      <template v-if="!isLoadingUsers">
        <Col 
          v-for="(user, i) in filterUserByName"
          :key="i"
          size="4"
        >
          <Card 
            role="button"
            user
            :title="user.name"
            @click="toggleUserPopUp(user)"
          >
            <List>

              <ListItem 
                icon-append="telephone"
                :text="user.phone"
              />

              <ListItem
                icon-append="email"
                :text="user.email"
              />

            </List>
          </Card>
        </Col>

      </template> 

      

      <template v-if="!isLoadingUsers && filterUserByName.length === 0">
        <Col size="3">

          <Card 
            user
            title="Ничего не найдено"
          >
            По запросу {{ inputUserName }} <br />
            Не было найдено ни одного пользователя
          </Card>

        </Col>
      </template>

      <template v-if="isLoadingUsers">

        <Col size="3">
          <Card 
            user
            title="Загрузка..."
          >
            Подождите немного пользователи грузятся
          </Card>
        </Col>

      </template>
      
    </Row>
  </Container>

  <PopUpUser 
    v-model="openUserPopUp"
    :user="currentUser"
  />
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }; 
</style>