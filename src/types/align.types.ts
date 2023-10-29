export type AlignContent = 'baseline' | 'space-around' | 'space-between' | 'space-evenly' | 'center' | 'end' | 'start';
export type AlignItems = Omit<AlignContent, 'space-around' | 'space-between' | 'space-evenly'> ;

export interface AlignProps {
    align: AlignContent;
    alignContent: AlignItems;
    justify: AlignItems;
    justifyContent: Omit<AlignContent, 'baseline'>;
}; 