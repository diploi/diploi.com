export const chart = {
  newProjectStartUp: {
    title: 'Starting a New Project',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 7 },
      { title: 'Containerized', value: 115, comparison: 24 },
      { title: 'Traditional', value: 68, comparison: 14 },
    ],
  },
  developerOnboarding: {
    title: 'Onboarding a New Developer',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 10 },
      { title: 'Containerized', value: 45, comparison: 4 },
      { title: 'Traditional', value: 92, comparison: 10 },
    ],
  },
  creatingTestEnvironment: {
    title: 'Creating a New Test Environment',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 10 },
      { title: 'Containerized', value: 62, comparison: 6 },
      { title: 'Traditional', value: 115, comparison: 11 },
    ],
  },
  updatingProduction: {
    title: 'Updating Production',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 3.5 },
      { title: 'Containerized', value: 6, comparison: 2 },
      { title: 'Traditional', value: 16, comparison: 5 },
    ],
    max: 16,
  },
};
