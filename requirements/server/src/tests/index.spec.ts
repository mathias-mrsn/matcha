// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from "supertest";
import { app } from "../index";
import { describe } from "node:test";

describe("Server", () => {
  const request = supertest.agent(app);

  // afterAll((done) => {
  // app.disable("server");
  // });

  it("should return 200 OK", async () => {
    const response = await request.get("/api/authentication/signin");
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      it: "Hello World!",
    });
  });
});
