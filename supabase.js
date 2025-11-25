// --- CONFIGURE YOUR SUPABASE PROJECT HERE ---
const SUPABASE_URL = "https://rtculoikrphlqpeuftfo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0Y3Vsb2lrcnBobHFwZXVmdGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDg3NjIsImV4cCI6MjA3OTU4NDc2Mn0.cdf3IdPy0Bj1fBwGf7g5pfPh0vdCCCDL8VS5iPMeGRg";
// --------------------------------------------

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
