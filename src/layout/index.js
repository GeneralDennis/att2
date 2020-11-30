import './base';
import './grid';
import './wrapper';
import './content';
import './footer';
import './about';
import './offer';

import initHeader from './header';

export default () => {
  initHeader();
  console.log('init layout');
};
