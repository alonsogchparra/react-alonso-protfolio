import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import message from './messages';

const Provider = ({children, locale = LOCALES.ENGLISH}) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={message[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;