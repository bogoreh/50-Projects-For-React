// Mock data for COVID-19 statistics
export const countries = [
  { id: 1, name: 'USA', flag: '🇺🇸', totalCases: 32500000 },
  { id: 2, name: 'India', flag: '🇮🇳', totalCases: 44900000 },
  { id: 3, name: 'Brazil', flag: '🇧🇷', totalCases: 37500000 },
  { id: 4, name: 'France', flag: '🇫🇷', totalCases: 40200000 },
  { id: 5, name: 'Germany', flag: '🇩🇪', totalCases: 38100000 },
  { id: 6, name: 'UK', flag: '🇬🇧', totalCases: 29500000 },
  { id: 7, name: 'Italy', flag: '🇮🇹', totalCases: 27800000 },
  { id: 8, name: 'Spain', flag: '🇪🇸', totalCases: 26300000 },
]

export const globalStats = {
  totalCases: 695432109,
  activeCases: 15234876,
  recovered: 665123456,
  deaths: 6912345
}

export const countryStats = {
  'USA': {
    totalCases: 32500000,
    activeCases: 1250000,
    recovered: 30500000,
    deaths: 750000
  },
  'India': {
    totalCases: 44900000,
    activeCases: 980000,
    recovered: 43300000,
    deaths: 531000
  },
  'Brazil': {
    totalCases: 37500000,
    activeCases: 850000,
    recovered: 35800000,
    deaths: 700000
  },
  'France': {
    totalCases: 40200000,
    activeCases: 1100000,
    recovered: 38400000,
    deaths: 700000
  },
  'Germany': {
    totalCases: 38100000,
    activeCases: 950000,
    recovered: 36500000,
    deaths: 650000
  },
  'UK': {
    totalCases: 29500000,
    activeCases: 780000,
    recovered: 28000000,
    deaths: 220000
  },
  'Italy': {
    totalCases: 27800000,
    activeCases: 650000,
    recovered: 26500000,
    deaths: 190000
  },
  'Spain': {
    totalCases: 26300000,
    activeCases: 580000,
    recovered: 25100000,
    deaths: 120000
  }
}

export const getCountryStats = (countryName) => {
  if (countryName === 'Global') {
    return globalStats
  }
  return countryStats[countryName] || globalStats
}