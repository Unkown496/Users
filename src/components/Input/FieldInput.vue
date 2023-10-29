<template>
    <div class="field">
        <div 
            v-if="!!$slots['icon-append']"
            class="field__icon field__icon--append"
        >
            <slot name="icon-append" />
        </div>

        <input
            class="field__input"
            :class="{
                'field__input--full': full,
            }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @change="$emit('change')"
        />

        <div
            v-if="!!$slots['icon-prepend']"
            class="field__icon field__icon--prepend"
        >
            <slot name="icon-prepend" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Styles } from "../../types/styles.type.ts";

    interface Props extends Partial<Styles> {
        modelValue: string | number;
    };

    const props = withDefaults(defineProps<Props>(), {
        full: false,
    });
</script>

<style lang="scss" scoped>
    @import "@styles/variables.scss";

    .field {
        position: relative;

        &__icon {
            margin: auto;
            top: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            position: absolute;

            &--append { 
                left: 0;
            };

            &--prepend {
                left: 100%;
            };
        };

        &__input {
            height: 30px;


            padding: {
                right: 1.5rem;
                left: 1.5rem;
                top: .7rem;
                bottom: .7rem;
            };


            &--full {
                width: 100%;
            };

            border-radius: 4rem;
            border: 1px solid $blueberry;
        };
    };
</style>