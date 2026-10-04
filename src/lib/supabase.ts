import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nzkfybclnktdvfvhhojp.supabase.co';
const supabaseKey = 'sb_publishable_7aIvZbyzyX61NClXpTXvvg_NWvAo-VM';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);