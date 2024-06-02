import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.post("/", (c) => {
  return c.text("POST BLOG");
});

blogRouter.put("/", (c) => {
  return c.text(" PUT BLOG");
});

blogRouter.get("/:id", (c) => {
  const param = c.req.param("name");
  return c.text("id : " + param);
});

blogRouter.get("/bulk", (c) => {
  return c.text("BULK!");
});
