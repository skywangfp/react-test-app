const fetch = require("node-fetch");
const path = require("path");

const {
  buildClientSchema,
  printSchema,
  introspectionQuery
} = require("graphql");
const fs = require("fs");

async function main() {
  const res = await fetch("http://localhost:3001/graphql?", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: introspectionQuery })
  });
  const introspectionSchemaResult = await res.json();
  const clientSchema = buildClientSchema(introspectionSchemaResult.data);
  const sdl = printSchema(clientSchema);
  fs.writeFileSync(path.join(__dirname, "schema.graphql"), sdl);
}

main().catch(e => {
  console.error("ERROR", e);
});
