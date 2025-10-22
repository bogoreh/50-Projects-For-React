import { faker } from '@faker-js/faker';

// Generate fake data for the conference
export const conferenceData = {
  eventName: "React Nexus 2024",
  tagline: "Connecting the Future of React Development",
  date: "October 15-16, 2024",
  location: {
    name: "Tech Innovation Center",
    address: "123 Developer Street, San Francisco, CA 94105",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  speakers: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    title: faker.person.jobTitle(),
    company: faker.company.name(),
    bio: faker.lorem.paragraphs(2),
    avatar: faker.image.avatar(),
    topic: `React ${faker.word.adjective()} ${faker.word.noun()}`,
    social: {
      twitter: faker.internet.userName(),
      github: faker.internet.userName()
    }
  })),
  schedule: {
    day1: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Registration & Breakfast",
        type: "break",
        speaker: null
      },
      {
        time: "10:00 AM - 10:30 AM",
        title: "Opening Keynote: The Future of React",
        type: "keynote",
        speaker: 1
      },
      {
        time: "10:45 AM - 11:30 AM",
        title: "React 18 Deep Dive",
        type: "talk",
        speaker: 2
      },
      {
        time: "11:45 AM - 12:30 PM",
        title: "State Management in 2024",
        type: "talk",
        speaker: 3
      },
      {
        time: "12:30 PM - 1:30 PM",
        title: "Lunch Break",
        type: "break",
        speaker: null
      },
      {
        time: "1:30 PM - 2:15 PM",
        title: "Building Accessible React Apps",
        type: "workshop",
        speaker: 4
      },
      {
        time: "2:30 PM - 3:15 PM",
        title: "React Performance Optimization",
        type: "talk",
        speaker: 5
      }
    ],
    day2: [
      {
        time: "9:00 AM - 9:30 AM",
        title: "Morning Coffee",
        type: "break",
        speaker: null
      },
      {
        time: "9:30 AM - 10:15 AM",
        title: "React Native Advances",
        type: "talk",
        speaker: 6
      },
      {
        time: "10:30 AM - 11:15 AM",
        title: "Testing React Applications",
        type: "workshop",
        speaker: 7
      },
      {
        time: "11:30 AM - 12:15 PM",
        title: "Server Components in Production",
        type: "talk",
        speaker: 8
      },
      {
        time: "12:15 PM - 1:15 PM",
        title: "Lunch & Networking",
        type: "break",
        speaker: null
      },
      {
        time: "1:15 PM - 2:00 PM",
        title: "Closing Keynote: What's Next for React",
        type: "keynote",
        speaker: 9
      }
    ]
  },
  codeOfConduct: [
    "Be respectful and inclusive",
    "No harassment of any kind",
    "Respect others' opinions and experiences",
    "Keep discussions professional",
    "Report any concerns to conference staff"
  ]
};