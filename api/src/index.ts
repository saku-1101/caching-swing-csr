import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { assertNonNullable } from "../libs/assert";
import { prisma } from "../prisma/client";

const app = new Elysia().use(cors());

const updateUser = async (body: { name: string }) => {
  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: { name: body.name },
  });
  return updatedUser;
};

app.get("/api/get/unstable/data", () => {
  const randomNumber = Math.random() * 100;
  return { randomNumber: randomNumber };
});
app.get("/api/get/user", async () => {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });
  assertNonNullable(user);
  return user;
});
app.post("/api/update/user", ({ body }) => updateUser(body), {
  body: t.Object({
    name: t.String(),
  }),
});

app.listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
