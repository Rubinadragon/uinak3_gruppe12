import { client } from "./client";


export async function fetchAllLogs() {
    const data = await client.fetch(
        `*[_type == 'logg']{
  _id,
  _createdAt,
  loggdato,
  loggpersoner[]-> {
    personnavn
  },
  loggbeskrivelse,
  loggtimer
} | order(loggdato asc, _createdAt asc)`
    );

    return data;
}