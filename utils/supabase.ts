import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxiftsldxosywosstgxc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aWZ0c2xkeG9zeXdvc3N0Z3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MTcyNzgsImV4cCI6MjAxNzk5MzI3OH0.Vdq-EhV24jf2UpnGq82NBhrwhL1H9j2mn5W6VZSr_oI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
