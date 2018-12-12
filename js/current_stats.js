const getCurrentStats = () => {
  const currentStatsTemplate = `
  <ul class="stats">
    ${new Array(10)
      .fill(`<li class="stats__result stats__result--wrong"></li>`)
      .join(``)}
  </ul>`;

  return currentStatsTemplate;
};

export {getCurrentStats};
