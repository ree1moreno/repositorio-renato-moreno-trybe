import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import ILeaderboard from '../interfaces/ILeaderboard';

interface ITeam extends Teams {
  teamHome: Matches[],
  teamAway: Matches[],
}

const getTeamsResults = (team: ITeam) => [
  ...(team.teamHome || []).map((match: Matches) => {
    const homeGoals = Number(match.homeTeamGoals);
    const awayGoals = Number(match.awayTeamGoals);

    return {
      goalsFavor: homeGoals,
      goalsOwn: awayGoals,
      balance: homeGoals - awayGoals,
    };
  }),
  ...(team.teamAway || []).map((match: Matches) => {
    const homeGoals = Number(match.homeTeamGoals);
    const awayGoals = Number(match.awayTeamGoals);

    return {
      goalsFavor: awayGoals,
      goalsOwn: homeGoals,
      balance: awayGoals - homeGoals,
    };
  }),
];

const createLeaderboard = (teams: ITeam[]) => {
  const leaderboard = teams.map((team: ITeam) => {
    const matchesList = getTeamsResults(team);
    const totalVictories = matchesList.filter((match) => match.balance > 0).length;
    const totalDraws = matchesList.filter((match) => match.balance === 0).length;
    const totalLosses = matchesList.filter((match) => match.balance < 0).length;
    const efficiency = ((totalVictories * 3 + totalDraws) / (matchesList.length * 3)) * 100;
    return { name: team.teamName,
      totalPoints: totalVictories * 3 + totalDraws,
      totalGames: matchesList.length,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor: matchesList.reduce((a, b) => a + b.goalsFavor, 0),
      goalsOwn: matchesList.reduce((a, b) => a + b.goalsOwn, 0),
      goalsBalance: matchesList.reduce((a, b) => a + b.goalsFavor - b.goalsOwn, 0),
      efficiency: Number(efficiency.toFixed(2)) };
  });

  return leaderboard;
};

const putOrder = (team1:ILeaderboard, team2: ILeaderboard) => (team2.totalPoints - team1.totalPoints
  || team2.goalsBalance - team1.goalsBalance || team2.goalsFavor - team1.goalsFavor
);

export default class LeaderboardService {
  static findAll = async () => {
    const teamInfo = await Teams.findAll({
      include: [{
        // model: Teams,
        // as: 'teamHome',
        association: 'teamHome',
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        where: { inProgress: false },
      },
      {
        // model: Teams,
        // as: 'teamAway',
        association: 'teamAway',
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        where: { inProgress: false },
      }],
    }) as ITeam[];
    const leaderboard = createLeaderboard(teamInfo).sort(putOrder);

    return leaderboard;
  };

  static findAllHome = async () => {
    const teamInfo = await Teams.findAll({
      include: [{
        // model: Teams,
        // as: 'teamHome',
        association: 'teamHome',
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        where: { inProgress: false },
      }],
    }) as ITeam[];
    const leaderboard = createLeaderboard(teamInfo).sort(putOrder);

    return leaderboard;
  };

  static findAllAway = async () => {
    const teamInfo = await Teams.findAll({
      include: [{
        // model: Teams,
        // as: 'teamAway',
        association: 'teamAway',
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        where: { inProgress: false },
      }],
    }) as ITeam[];
    const leaderboard = createLeaderboard(teamInfo).sort(putOrder);

    return leaderboard;
  };
}
