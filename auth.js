// Initialize Supabase (replace with your own URL and anon key)
const supabaseUrl = "https://rtculoikrphlqpeuftfo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0Y3Vsb2lrcnBobHFwZXVmdGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDg3NjIsImV4cCI6MjA3OTU4NDc2Mn0.cdf3IdPy0Bj1fBwGf7g5pfPh0vdCCCDL8VS5iPMeGRg";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// ---------------- SIGN UP ----------------
async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert("Signup failed: " + error.message);
  } else {
    alert("Signup successful! Check your email for confirmation.");
  }
}

// ---------------- LOGIN ----------------
async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    // Supabase automatically stores the session in localStorage
    window.location.href = "dashboard.html"; // redirect after login
  }
}

// ---------------- LOGOUT ----------------
async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    alert("Logout failed: " + error.message);
  } else {
    window.location.href = "index.html"; // redirect to login page
  }
}

// ---------------- CHECK SESSION ----------------
// Call this on page load to redirect if not logged in
async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    // Not logged in, redirect to login page
    window.location.href = "index.html";
  } else {
    console.log("User is logged in:", session.user.email);
  }
}

// Optional: Listen for auth state changes across tabs
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth state changed:", event, session);
  // For example, redirect on logout
  if (event === "SIGNED_OUT") {
    window.location.href = "index.html";
  }
});
