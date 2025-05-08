'use client'

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import { User } from './models/user';
import { Pages } from './models/component';
import { Alarm } from './models/alarm';
import { Prevision } from './models/prevision';
import { Settings } from './models/settings';
import { getAlarm } from './services/alarmService';
import { getPrevision } from './services/previsionService';
import { getSettings } from './services/settingsService';

const App: React.FC = () => {
  const [user, setUser] = useState<User | undefined>();
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [previsions, setPrevisions] = useState<Prevision[]>([]);
  const [settings, setSettings] = useState<Settings[]>([]);
  const [currentPage, setCurrentPage] = useState<Pages>('/login');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.username) {
          const clientId = user.username;

          const alarmData = await getAlarm(clientId);
          setAlarms(alarmData);

          const previsionData = await getPrevision(clientId);
          setPrevisions(previsionData);

          const settingsData = await getSettings(clientId);
          setSettings(settingsData);

          setCurrentPage('/prevision');
        }
      } catch (error) {
        console.error('fetchData -', error);
      }
    };

    fetchData();
  }, [user]);

  // Render the correct "page" based on currentPage
  let content = null;
  if (currentPage === '/login') {
    content = <Login setUser={setUser} />;
  } else if (
    currentPage === '/prevision' ||
    currentPage === '/settings' ||
    currentPage === '/alarm'
  ) {
    content = (
      <Main
        currentPage={currentPage}
        alarms={alarms}
        previsions={previsions}
        settings={settings}
      />
    );
  } else if (currentPage === '/history') {
    content = <div>Histórico (em breve)</div>;
  }

  return (
    <div className='app'>
      <Header
        clientName={user?.company}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {content}
    </div>
  );
};

export default App;