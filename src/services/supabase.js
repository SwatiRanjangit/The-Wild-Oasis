import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dysfrqyevghjjcljztne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5c2ZycXlldmdoampjbGp6dG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NjkyMzIsImV4cCI6MjAwNzE0NTIzMn0.XhJ2tACLsLxEVOf56g0z_RKE9B_iP-Xq3kjuhBYMz6M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
