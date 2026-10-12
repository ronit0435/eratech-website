
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nzkfybclnktdvfvhhojp.supabase.co';
const supabaseKey = 'sb_publishable_7aIvZbyzyX61NClXpTXvvg_NWvAo-VM';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);