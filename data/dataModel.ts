export interface Round {
    shots: number[];
    total: number;
    roundNumber: number;
}
export interface Training {
    id: string;
    date: string;
    firstPeriod: Round[];
    firstPeriodTotalScore: number;
    secondPeriod: Round[];
    secondPeriodTotalScore: number;
    totalScore: number;
}
export interface Competition {
    id: string;
    name: string;
    date: string;
    location: string;
    firstPeriod: Round[];
    firstPeriodTotalScore: number;
    secondPeriod: Round[];
    secondPeriodTotalScore: number;
    totalScore: number;
}