// API Routes
const protectedAPIRoutes = ["/api/profile"];

export default defineEventHandler((event) => {
  const session = false;
  // event.context.auth = { user: 123 };

  const isProtectedAPI = protectedAPIRoutes.includes(event.path);

  if (!session && isProtectedAPI)
    throw createError({
      statusCode: 401,
      statusMessage: "un-authorized",
    });
});
