export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
  }
  
 export  interface OptionGroup {
    label: string;
    options: SelectOption[];
    disabled?: boolean;
  }
  
  
export type SelectOptions = (SelectOption | OptionGroup)[];