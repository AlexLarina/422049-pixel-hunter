const questionStatuses = [`stats__result--wrong`, `stats__result--correct`,
  `stats__result--fast`, `stats__result--slow`, `stats__result--unknown`];

const currentStatsTemplate = `
      <li class="stats__result ${questionStatuses[Math.ceil(Math.random() * questionStatuses.length)]}"></li>`;

export {currentStatsTemplate};
