import type { Icon } from "./icon.types";

export type ItemList = {
    text: string;
} & Partial<Icon>; 