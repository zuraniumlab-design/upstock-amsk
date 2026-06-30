import { createClient } from '@supabase/supabase-js';

// Ambil dari file .env (lihat .env.example)
// JANGAN hardcode key di sini supaya aman kalau repo nya public
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY belum diset. ' +
    'Copy .env.example jadi .env lalu isi credential dari project Supabase kamu.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
