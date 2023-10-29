<template>
    <component
        :is="tag"
        class="container"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
    interface Props {
        tag?: string;
    };

    const props = withDefaults(defineProps<Props>(), {
        tag: "div",
    });
</script>

<style lang="scss" scoped>
    .container {
        margin: {
            top: 4rem;
            left: 5rem;
            right: 5rem;
        };
    };
</style>