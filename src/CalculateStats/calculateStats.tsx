export const calculateStats = (games: any) => {
  if (!games.data) {
    return;
  }
  const numGames = games.data.length;

  let total = {
    totalGames: numGames,
    pts: 0,
    ast: 0,
    blk: 0,
    dReb: 0,
    fg3a: 0,
    fg3m: 0,
    fga: 0,
    fgm: 0,
    fta: 0,
    ftm: 0,
    sec: 0, // TODO ADD TOTAL SEC CALCULATIONS
    oReb: 0,
    pf: 0,
    stl: 0,
    turnover: 0
  }
  let i = 0;
  for (let game of games.data) {
    total.pts += (game as any).pts;
    total.ast += (game as any).ast;
    total.blk += (game as any).blk;
    total.dReb += (game as any).dreb;
    total.fg3a += (game as any).fg3a;
    total.fg3m += (game as any).fg3m;
    total.fga += (game as any).fga;
    total.fgm += (game as any).fgm;
    total.fta += (game as any).fta;
    total.ftm += (game as any).ftm;
    total.oReb += (game as any).oreb;
    total.pf += (game as any).pf;
    total.stl += (game as any).stl;
    total.turnover += (game as any).turnover;
  }

  return total;
}