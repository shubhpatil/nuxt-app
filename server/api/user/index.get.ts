import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  setResponseStatus(event, 200);
  return {
    message: "success",
    data: await prisma.user.findMany(),
  };
});
