/**
 * kit-type is a grouping of specific kit types
 */
type kitType = 'carry' | 'clothing' | 'sleeping' | 'cooking' | 'stuff';

/**
 * kitItems are selected from the kit-inventory and added/removed from a kit-list
 * 
 */
interface KitItem {
    name: string;
    category: kitType;
    weight: number;
    notes: string;
}

/**
 * a kit-list has a number of items selected from the kit-inventory
 * 
 * @interface kitList
 */
interface KitList {
    name: string;
    kit: KitItem[];
}
