import React, { useState, createContext, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { Session } from '@supabase/supabase-js';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }:{children:React.ReactNode}) => {
  const [session, setSession] = useState<Session|null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <AuthenticatedUserContext.Provider value={{ session, setSession }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
