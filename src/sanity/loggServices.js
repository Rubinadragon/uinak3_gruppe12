import { client } from "./client";


export async function fetchAllLoggData() {
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

export async function fetchLogByPerson(personSlug) {
    const data = await client.fetch(
        `*[_type == "logg" && $personSlug in loggpersoner[]-> personslug.current]{
    _id,
    _createdAt,
  loggdato,
  loggpersoner[]-> {
    personnavn
  },
  loggbeskrivelse,
  loggtimer
} | order(loggdato asc, _createdAt asc)`, { personSlug });

    return data;
}