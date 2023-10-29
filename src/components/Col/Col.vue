<template>
    <component
        :is="tag"
        :style="aligmentStyle"
        :class="{
            [`col-${size}`]: !!size,
            [`col--flex`]: flex,
        }"
        class="col"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
    import useAligment from "../../helpers/useAligmnet";
    import { AlignProps } from "../../types/align.types.ts";

    interface Props extends Partial<AlignProps> {
        tag?: string;
        size?: number | string;
        flex?: boolean;
    }; 

    const props = withDefaults(defineProps<Props>(), {
        tag: "div",
    });

    const aligmentStyle = useAligment(props);
</script>

<style lang="scss">
    .col {
        &--flex {
            display: flex;
        };

        @for $size from 12 through 1 {
            &-#{$size} {
                width: calc(100% / calc(12 / $size));
            };
        }
    };
</style>