<template>
    <component
        :is="tag"
        class="row"
        :style="aligment"
        :class="{
            [`row--gx-${gx}`]: !!gx,
            [`row--gy-${gy}`]: !!gy,
            [`row--g-${g}`]: !!g,
        }"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
    import useAligment from "../../helpers/useAligmnet";
    import { AlignProps } from "../../types/align.types.ts";

    interface Props extends Partial<AlignProps> {
        tag?: string;
        g?: number | string;
        gx?: number | string;
        gy?: number | string;
    };

    const props = withDefaults(defineProps<Props>(), {
        tag: "div",
    });

    const { aligment } = useAligment(props);
</script>

<style lang="scss">
    @import "@styles/variables.scss";

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @each $num, $size in $sizes {
            &--g-#{$num} {
                gap: $size;
            };

            &--gx-#{$num} {
                .col {
                    margin: {
                        left: $size;
                        right: $size;
                    };
                };
            };
            &--gy-#{$num} {
                .col {
                    margin: {
                        top: $size;
                        bottom: $size;
                    };
                };
            };
        };        
    };
</style>