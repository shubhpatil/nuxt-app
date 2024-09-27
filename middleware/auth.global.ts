// Page Routes
const protectedRoutes = ["/dashboard"];
const unprotectedRoutes = ["/"];

export default defineNuxtRouteMiddleware((to, from) => {
  const session = false;

  // Check if protected route
  const isProtectedRoute = protectedRoutes.includes(to.path);

  // If no session available and its protected route then re-direct to "/" home page or login page
  if (!session && isProtectedRoute) {
    return navigateTo("/"); // navigateTo('/login')
  }

  // If user is authenticated then re-direct to dashboard
  if (session && unprotectedRoutes.includes(to.path)) {
    return navigateTo("/dashboard");
  }
});
