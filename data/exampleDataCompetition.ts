import { Competition, Training } from "./dataModel";

export const exampleCompetition1: Competition = {
    id: "1",
    name: "Example Competition 1",
    location: "Stockholm, Sweden",
    date: "2024-08-16",
    firstPeriod: [
        { shots: [8, 10, 8], total: 26, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [9, 10, 10], total: 29, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 8, 10], total: 28, roundNumber: 8 },
        { shots: [9, 10, 9], total: 28, roundNumber: 9 }, 
        { shots: [10, 10, 10], total: 30, roundNumber: 10 }
    ],
    firstPeriodTotalScore: 282,
    secondPeriod: [
        { shots: [9, 10, 8], total: 27, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [10, 10, 10], total: 30, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 10, 10], total: 30, roundNumber: 8 },
        { shots: [9, 9, 9], total: 27, roundNumber: 9 },
        { shots: [10, 10, 10], total: 30, roundNumber: 10 },
    ],
    secondPeriodTotalScore: 285,
    totalScore: 567
};

export const exampleCompetition2: Competition = {
    id: "2",
    name: "Example Competition 2",
    location: "Oslo, Norway",
    date: "2024-07-10",
    firstPeriod: [
        { shots: [8, 10, 8], total: 26, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [9, 10, 10], total: 29, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 8, 10], total: 28, roundNumber: 8 },
        { shots: [9, 10, 9], total: 28, roundNumber: 9 }, 
        { shots: [10, 10, 10], total: 30, roundNumber: 10 }
    ],
    firstPeriodTotalScore: 282,
    secondPeriod: [
        { shots: [9, 10, 8], total: 27, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [10, 10, 10], total: 30, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 10, 10], total: 30, roundNumber: 8 },
        { shots: [9, 9, 9], total: 27, roundNumber: 9 },
        { shots: [10, 10, 10], total: 30, roundNumber: 10 },
    ],
    secondPeriodTotalScore: 285,
    totalScore: 567
};

export const exampleCompetition3: Competition = {
    id: "3",
    name: "Example Competition 3",
    location: "Borås, Sweden",
    date: "2024-05-01",
    firstPeriod: [
        { shots: [8, 10, 8], total: 26, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [9, 10, 10], total: 29, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 8, 10], total: 28, roundNumber: 8 },
        { shots: [9, 10, 9], total: 28, roundNumber: 9 }, 
        { shots: [10, 10, 10], total: 30, roundNumber: 10 }
    ],
    firstPeriodTotalScore: 282,
    secondPeriod: [
        { shots: [9, 10, 8], total: 27, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [10, 10, 10], total: 30, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 10, 10], total: 30, roundNumber: 8 },
        { shots: [9, 9, 9], total: 27, roundNumber: 9 },
        { shots: [10, 10, 10], total: 30, roundNumber: 10 },
    ],
    secondPeriodTotalScore: 285,
    totalScore: 567
};

export const exampleCompetition4: Competition = {
    id: "4",
    name: "Example Competition 4",
    location: "Berlin, Germany",
    date: "2024-03-04",
    firstPeriod: [
        { shots: [8, 10, 8], total: 26, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [9, 10, 10], total: 29, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 8, 10], total: 28, roundNumber: 8 },
        { shots: [9, 10, 9], total: 28, roundNumber: 9 }, 
        { shots: [10, 10, 10], total: 30, roundNumber: 10 }
    ],
    firstPeriodTotalScore: 282,
    secondPeriod: [
        { shots: [9, 10, 8], total: 27, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [10, 10, 10], total: 30, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 10, 10], total: 30, roundNumber: 8 },
        { shots: [9, 9, 9], total: 27, roundNumber: 9 },
        { shots: [10, 10, 10], total: 30, roundNumber: 10 },
    ],
    secondPeriodTotalScore: 285,
    totalScore: 567
};

export const exampleCompetition5: Competition = {
    id: "5",
    name: "Example Competition 5",
    location: "Las Vegas, United States",
    date: "2024-10-01",
    firstPeriod: [
        { shots: [8, 10, 8], total: 26, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [9, 10, 10], total: 29, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 8, 10], total: 28, roundNumber: 8 },
        { shots: [9, 10, 9], total: 28, roundNumber: 9 }, 
        { shots: [10, 10, 10], total: 30, roundNumber: 10 }
    ],
    firstPeriodTotalScore: 282,
    secondPeriod: [
        { shots: [9, 10, 8], total: 27, roundNumber: 1 },
        { shots: [10, 10, 10], total: 30, roundNumber: 2 },
        { shots: [9, 9, 9], total: 27, roundNumber: 3 },
        { shots: [10, 10, 10], total: 30, roundNumber: 4 },
        { shots: [9, 9, 9], total: 27, roundNumber: 5 },
        { shots: [10, 10, 10], total: 30, roundNumber: 6 },
        { shots: [9, 9, 9], total: 27, roundNumber: 7 },
        { shots: [10, 10, 10], total: 30, roundNumber: 8 },
        { shots: [9, 9, 9], total: 27, roundNumber: 9 },
        { shots: [10, 10, 10], total: 30, roundNumber: 10 },
    ],
    secondPeriodTotalScore: 285,
    totalScore: 567
};