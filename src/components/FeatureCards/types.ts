import * as icons from '@phosphor-icons/react'

export type FeatureCard = {
  title: string;
  items: string[];
  icon: keyof typeof icons;
}
