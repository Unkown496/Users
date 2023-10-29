<template>
    <ul class="list">
        <slot v-if="!!$slots['default']" />

        <template v-else>
            <template v-for="(item) in items">
                <ListItem
                    v-if="!$slots['item']"
                    :text="item.text"
                    :icon-append="item.iconAppend"
                />

                <ListItem v-if="!!$slots['item']">
                    <slot 
                        name="item"
                        :item="item"
                    />
                </ListItem>
            </template>
        </template>
    </ul>
</template>

<script setup lang="ts">
    import ListItem from "./ListItem.vue";
    import type { ItemList } from "../../types/list.types.ts";

    interface Props {
        items?: ListItemType[];
    };

    const props = defineProps<Props>();
</script>