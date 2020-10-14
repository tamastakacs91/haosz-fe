export const getPageUrl = () =>
  `${window.location.origin}${window.location.pathname}`;

export const setIdentifier = () => window.location.pathname;

export const setPageTitle = () => {
  let pageTitle;
  switch (window.location.pathname) {
    case '/site/jazzpresszo/tolunk-nyugatabbra-igy-csinaljak':
      pageTitle = 'Tőlünk nyugatabbra így csinálják... Mit kellene átvennünk?';
      break;
    case '/site/jazzpresszo/praxiskozosseg-valoban-a-jovo-egyik-ellatasi-formaja':
      pageTitle = 'Praxisközösség valóban a jövő egyik ellátási formája?';
      break;
    case '/site/jazzpresszo/innovacio-a-haziorvoslasban':
      pageTitle =
        'Innováció a háziorvoslásban - Mik a lehetőségeink, korlátaink?';
      break;
    case '/site/jazzpresszo/covid-es-az-alapellatas':
      pageTitle =
        'COVID és az alapellátás - Hogy vizsgáztunk, miben kell fejlődnünk?';
      break;
    case '/site/jazzpresszo/haziorvosi-finanszirozas':
      pageTitle = 'Háziorvosi finanszírozás, béremelés 2021-2023?';
      break;
    case '/site/jazzpresszo/kollegialis-vezetoi-rendszer':
      pageTitle = 'Kollegiális vezetői rendszer - mi legyen a célkitűzés?';
      break;
    case '/site/jazzpresszo/szakmai-alapellatasi-kihivasok-2020':
      pageTitle = 'Szakmai alapellátási kihívások 2020';
      break;
    case '/site/jazzpresszo/mire-kompetens-a-haziorvos':
      pageTitle = 'Mire kompetens a háziorvos, amit amúgy nem végezhet?';
  }
  return pageTitle;
};
