// Interface para 'Ability'
interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  // Interface para 'Form'
  interface Form {
    name: string;
    url: string;
  }
  
  // Interface para 'Stat'
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  // Interface para 'Type'
  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  // Interface para o Pokemon (exemplo baseado no Ditto)
  export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    id: number;
    name: string;
    order: number;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  