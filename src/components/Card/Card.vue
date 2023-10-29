<template>
    <component
        :is="tag"
        class="card"
        :class="{
            'card--user': user,
        }"
    >
        <header class="card__header">
            <h2 
                v-if="!$slots['header'] && !!title"
                class="card__title"
            >
                {{ title }}
            </h2>
            <slot 
                v-if="!!$slots['header'] && !title"
                name="header" 
            />
        </header>

        <div class="card__content">
            <slot />
        </div>

        <div
            v-if="!!$slots['footer']" 
            class="card__footer"
        >
            <slot name="footer" />
        </div>
    </component>
</template>

<script setup lang="ts">
    interface Props {
        tag?: string;
        title?: string;
        user?: boolean;
    };

    const props = withDefaults(defineProps<Props>(), {
        tag: "div",
    });
</script>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        

        border-radius: 1rem;
        background: #FFF;

        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
        padding: 1.5rem;

        &__header {
            margin-bottom: 1.5rem;
        };

        &__content {
            flex: 1;
        };

        &--user {
            width: 357px;
            height: 314px;
        };
    };
</style>