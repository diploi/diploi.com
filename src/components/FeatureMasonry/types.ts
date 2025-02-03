import * as icons from '@phosphor-icons/react';

export type TFeatureMasonryItem = {
  id: string;
  title: string;
  description: string;
  gridArea: string;
  color: string;
  icon: keyof typeof icons;
  showDocker?: boolean;
  showHelm?: boolean;
};
