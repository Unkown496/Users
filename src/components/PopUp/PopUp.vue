<template>
    <Teleport :to="to">
        <component
            v-if="modelValue"
            :is="tag"
            class="pop-up"
        >

            <div class="pop-up__content">
                <Card>
                    <template #header>
                        <h2 
                            v-if="!!title"
                            class="card__title"
                        >
                            {{ title }}
                        </h2>

                        <Icon
                            role="button"
                            width="20"
                            height="20" 
                            name="close" 
                            @click="onClose"
                        />
                    </template>

                    <slot />

                    <template
                        v-if="!!$slots['footer']" 
                        #footer
                    >
                        <slot name="footer" />
                    </template>
                </Card>
            </div>

            <div 
                class="pop-up__scrim"
                @click="onClose"
            ></div>

        </component>
    </Teleport>
</template>

<script setup lang="ts">
    import Icon from '../Icon/Icon.vue';

    import Card from '../Card/Card.vue';

    export interface Props {
        modelValue: boolean;
        title?: string;
        tag?: string;
        to?: string;
    };

    const props = withDefaults(defineProps<Props>(), {
        tag: "div",
        to: "div#app",
    }),
    emit = defineEmits<{
        (e: 'close'): void,
        (e: 'open'): void,
        (e: 'update:modelValue', isOpen: boolean): void,
    }>()

    const onClose = (): void => {
        emit('close');
        emit('update:modelValue', false);

        return;
    },
    onOpen = (): void => {
        emit('open');
        emit('update:modelValue', true);

        return;
    };
</script>

<style lang="scss">
    .pop-up {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 2;
        top: 0;        

        &__scrim {
            position: absolute;
            width: 100vw;
            height: 100vh;
            opacity: .5;
            background-color: #BCC3D080;
            z-index: 1;
        };

        &__content {
            z-index: 2;
            width: 500px;
            height: 468px !important;
        }; 

        .card {
            gap: 2.5rem;

            &__header {
                display: flex;
                align-items: center;
                margin: 0;  
            };
            &__title {
                flex: 1;
            }; 
        };
    };
</style>