import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    seeds(server) {
      server.db.loadData({
        todos: [
          { title: "Buy groceries", description: "Go to the supermarket and buy some groceries.", isDone: false },
          { title: "Walk the dog", description: "Go to the park with the dog, at least 2 hours walk. Take his toys.", isDone: false },
          { title: "Do laundry", description: "You cannot skip this again, do it ASAP. It smells.", isDone: false },
        ],
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/todos", ({ db }) => {
        return db.todos;
      });

      this.patch("/todos/:id", (schema, request) => {
        let todo = JSON.parse(request.requestBody).data;

        return schema.db.todos.update(todo.id, todo);
      });

      this.post("/todos", (schema, request) => {
        let todo = JSON.parse(request.requestBody).data;

        return schema.db.todos.insert(todo);
      });

      this.delete("/todos/:id", (schema, request) => {
        return schema.db.todos.remove(request.params.id);
      });
    },
  });

  window.server = server;

  return server;
}