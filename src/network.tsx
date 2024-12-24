import { i, init } from "@instantdb/react";
export const INSTANTDB_ID = "79f7b39e-92a9-4292-b21b-54bf1fdb1002";
export const INSTANTDB_SCHEMA = i.schema({
    entities: {
        todos: i.entity({
            text: i.string(),
            done: i.boolean(),
            createdAt: i.number(),
        }),
    },
})

export const db = init({appId: INSTANTDB_ID, schema: INSTANTDB_SCHEMA});
export const authUrl = db.auth.createAuthorizationURL({
    clientName: "google",
    redirectURL: window.location.href,
});