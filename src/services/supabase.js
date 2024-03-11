import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lidnkjceryuzqbopgmqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZG5ramNlcnl1enFib3BnbXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMjQ5MjksImV4cCI6MjAyMTYwMDkyOX0.3RcyON9M2iw6_NxFekA9q61E6dPLK1FowA0efIBcY5U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
