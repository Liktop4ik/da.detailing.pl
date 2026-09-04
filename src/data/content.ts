export type LocationGroup = {
  state: string;
  counties: string[];
};

export const locationGroups: LocationGroup[] = [
  {
    state: 'California',
    counties: [
      'Los Angeles County',
      'Orange County',
      'San Diego County',
      'Santa Clara County',
      'San Mateo County',
      'Alameda County',
      'San Francisco County',
      'Sacramento County',
    ],
  },
  {
    state: 'Texas',
    counties: ['Travis County'],
  },
  {
    state: 'Florida',
    counties: [
      'Broward County',
      'Miami-Dade County',
      'Palm Beach County',
      'Saint Lucie County',
      'Hillsborough County',
      'Orange County',
      'Lake County',
      'Seminole County',
      'Osceola County',
    ],
  },
];
