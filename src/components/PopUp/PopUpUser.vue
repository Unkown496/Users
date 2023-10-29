<template>
    <PopUp
        :="$props"
        :title="user?.name"
        :model-value="modelValue"
        @update:model-value="isOpen => $emit('update:modelValue', isOpen)"
        class="pop-up--user"
    >
        <Row   
            class="row--user"
            align="baseline"
            justify-content="space-between"
        >
          <Col size="4">
            <ListItem 
                plumbum 
                big
            >
              Телефон:
            </ListItem>
          </Col>

          <Col  
            flex 
            size="7"
          >
            <ListItem asphalt> {{ user.phone }} </ListItem>
          </Col>

          <Col size="4">
            <ListItem 
              plumbum 
              big
            >
              Почта:
            </ListItem>
          </Col>

          <Col  
            flex 
            size="7"
          >
            <ListItem asphalt> {{ user.email }} </ListItem>
          </Col>


          <Col size="4">
            <ListItem 
              plumbum 
              big
            >
                Дата приема:
            </ListItem>
          </Col>

          <Col  
            flex 
            size="7"
          >
            <ListItem asphalt> {{ user.hire_date }} </ListItem>
          </Col>

          
          <Col size="4">
            <ListItem 
              plumbum 
              big
            >
                Должность:
            </ListItem>
          </Col>
        
            <Col  
                flex 
                size="7"
            >
                <ListItem asphalt> {{ user.position_name }} </ListItem>
            </Col>

            <Col size="4">
                <ListItem 
                    plumbum 
                    big
                >
                    Подразделение:
                </ListItem>
          </Col>

            <Col  
                flex 
                size="7"
            >
                <ListItem asphalt> {{ user.department }} </ListItem>
            </Col>
        </Row>

        <template #footer>
            <Row class="row--user--addictional">
                <Col
                    size="12"
                >
                    <ListItem 
                        plumbum 
                        big
                    >
                        Дополнительная информация:
                    </ListItem>
                </Col>
                <Col
                    size="12"
                >
                    <ListItem asphalt> Опа, не приходит и поэтому размер поп-апа меньше </ListItem>
                </Col>
            </Row>
        </template>
    </PopUp>
</template>

<script setup lang="ts">
    import PopUp, { Props as PopUpProps } from './PopUp.vue';
    import Row from '../Row/Row.vue';
    import Col from '../Col/Col.vue';
    import ListItem from '../List/ListItem.vue';

    import type { User } from "../../types/api.types.ts";

    interface Props extends Omit<PopUpProps, 'title'> {
        modelValue: boolean;
        user: User;
    };

    const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
    .pop-up--user {
        .list__item-content {
            font-size: 16px;  
        };
    };

    .row--user {
        gap: .88rem;

        &--addictional {
            gap: .75rem;
        }; 
    };
</style>