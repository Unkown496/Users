import { toRefs, reactive } from "vue";

import { AlignProps } from "../types/align.types";

type StyleAlign = {
    'align-items': string;
    'align-content': string;
    'justify-items': string;
    'justify-content': string;
};

export default <T>(props: T & Partial<AlignProps>) => {
    const { align, alignContent, justify, justifyContent } = toRefs(props); 

    const aligment = reactive<StyleAlign>({
        'align-items': align?.value, 
        'align-content': alignContent?.value,
        'justify-items': justify?.value,
        'justify-content': justifyContent?.value,
    });

    return {
        aligment,
    };
};