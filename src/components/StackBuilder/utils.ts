export const ComponentType = {
  COMPONENT: 1,
  ADDON: 2,
  STARTER: 3,
} as const;

export type ComponentTypeLiteral = (typeof ComponentType)[keyof typeof ComponentType];

export const componentTypeIDToString: Record<ComponentTypeLiteral, string> = {
  1: 'component',
  2: 'addon',
  3: 'starter',
};

export type StackBuilderBlock = {
  componentID: number;
  componentTypeID: ComponentTypeLiteral;
  identifier: string;
  name: string;
  url: string;
  count?: number;
  badge?: 'new' | 'beta';
};
