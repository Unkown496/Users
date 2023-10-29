<template>
    <li class="list__item">
        <div 
            v-if="!!$slots['icon-append'] || !!iconAppend"
            class="list__item__icon list__item__icon--append"
        >
            <Icon 
                v-if="!$slots['icon-append'] || !!iconAppend"
                :name="iconAppend!"
            />

            <slot
                v-if="!!$slots['icon-append'] || !iconAppend" 
                name="icon-append" 
            />
        </div>

        <div 
            class="list__item-content"
            :class="{
                'list__item-content--big': big,
                'list__item-content--plumbum': plumbum,
                'list__item-content--asphalt': asphalt
            }"
        >
            <p v-if="!$slots['default']">{{ text }}</p>
            <slot />
        </div>
    </li>
</template>

<script setup lang="ts">
    import Icon from "../Icon/Icon.vue";

    import { ItemList } from "../../types/list.types";
    import { Color } from "../../types/color.types";

    interface Props extends Partial<ItemList>, Partial<Color> {
        big?: boolean;
    };
    
    const props = defineProps<Props>();
</script>

<style lang="scss">
    @import "@styles/variables.scss";

    .list__item {
        align-items: center;
        display: flex;

        gap: .88rem;

        &__icon {
            width: 24px;
            height: 24px;
        };


        &-content {
            &--plumbum {
                color: $plumbum;
            };
            &--asphalt {
                color: $asphalt;
            };

            &--big {
                font-size: 18px !important;
            };
        };
    };
</style>