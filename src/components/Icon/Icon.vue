<template>
    <component
        :width="width"
        :height="height"
        :is="icon"
    />
</template>

<script setup lang="ts">
    import { toRefs, onMounted, ref } from "vue";

    interface Props {
        name: string;
        width?: string | number;
        height?: string | number; 
        path?: string; 
    };
    const props = withDefaults(defineProps<Props>(), {
        path: "../../assets",
        width: 24,
        height: 24,
    });

    const { name, path } = toRefs(props);

    const icon = ref();

    const getIcon = async () => {
        const iconModule = await import(`${path.value}/${name.value}.svg?component`);

        return icon.value = iconModule.default;
    }; 

    onMounted(async () => {
        await getIcon();
    });
</script>