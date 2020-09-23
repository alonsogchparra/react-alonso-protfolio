import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation, Dashboard, About } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { I18nProvider, LOCALES } from './i18n';



function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  useEffect(() => {
    if (isEnglish) {
      setLocale(LOCALES.ENGLISH);
    } else {
      setLocale(LOCALES.SPANISH);
    }
  },[isEnglish])

  return (
    <I18nProvider locale={locale}>
     <BrowserRouter basename="/">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" component={About} />
      </Switch>
     </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
