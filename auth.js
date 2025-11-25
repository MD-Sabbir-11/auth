// SIGN UP
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

// LOGIN
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
    // Save the user session (optional, Supabase manages it automatically)
    localStorage.setItem("access_token", data.session.access_token);
    window.location.href = "dashboard.html"; // redirect
  }
}
