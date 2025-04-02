import { client } from "./client";


export async function fetchAllLoggData() {
    const data = await client.fetch(
        `*[_type == 'logg']{
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