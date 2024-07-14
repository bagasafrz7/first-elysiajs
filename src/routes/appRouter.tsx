import {Elysia, t} from "elysia";

export const appRouter = new Elysia({prefix: "/api/v1"})
  .get("/", () => "Hello Elysia")
  .onBeforeHandle(({ headers }) => {
    console.log("On Beforehandle hooks")

    // return "Returned from hooks"
  })
  .onAfterHandle(() => {
    console.log("onAfterHandle hooks")
  })
  .get("/users", () => {
    console.log("/users")
    return { message: "Users Data"}
  }, {
    beforeHandle: () => {
      console.log("beforeHandle hooks local")
    }
  })
  // .get("/books", () => <h1>Books Data</h1>)
  // .get("/books/:id", ({ params }) => <h1>Book ID: {params.id}</h1>)
  // .post("/books", ({ query }) => {
  //   console.log(query)
  // return "Handling Query"
  // console.log(headers)
  // return "Handling Headers"
  //   const { name, description } = body;
  //   return "handling body"
  // }, {
  //   body: t.Object({
  //     name: t.String(),
  //     description: t.String(),
  //   })
  // })