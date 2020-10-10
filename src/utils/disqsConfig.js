export const getPageUrl = () =>
  `${window.location.origin}${window.location.pathname}`;

export const setIdentifier = () => window.location.pathname;

export const setPageTitle = () => {
  let pageTitle;
  switch (window.location.pathname) {
    case '/jazzpresszo/tolunk-nyugatabbra-igy-csinaljak':
      pageTitle = 'Tőlünk nyugatabbra így csinálják... Mit kellene átvennünk?';
      break;
    case '/jazzpresszo/praxiskozosseg-valoban-a-jovo-egyik-ellatasi-formaja':
      pageTitle = 'Praxisközösség valóban a jövő egyik ellátási formája?';
      break;
    case '/jazzpresszo/innovacio-a-haziorvoslasban':
      pageTitle =
        'Innováció a háziorvoslásban - Mik a lehetőségeink, korlátaink?';
      break;
    case '/jazzpresszo/covid-es-az-alapellatas':
      pageTitle =
        'COVID és az alapellátás - Hogy vizsgáztunk, miben kell fejlődnünk?';
      break;
    case '/jazzpresszo/haziorvosi-finanszirozas':
      pageTitle = 'Háziorvosi finanszírozás, béremelés 2021-2023?';
      break;
    case '/jazzpresszo/kollegialis-vezetoi-rendszer':
      pageTitle = 'Kollegiális vezetői rendszer - mi legyen a célkitűzés?';
      break;
    case '/jazzpresszo/szakmai-alapellatasi-kihivasok-2020':
      pageTitle = 'Szakmai alapellátási kihívások 2020';
      break;
    case '/jazzpresszo/mire-kompetens-a-haziorvos':
      pageTitle = 'Mire kompetens a háziorvos, amit amúgy nem végezhet?';
  }
  return pageTitle;
};
