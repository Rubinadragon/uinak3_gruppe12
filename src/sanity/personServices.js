import { client } from "./client";

export async function fetchAllPersons() {
    const data = await client.fetch(
        `*[_type == "person"] | order(personnavn asc){
        _id,
        "personslug": personslug.current,
        _createdAt,
        profilbilde {asset->{url}, alt},
        personnavn,
        epost,
        bio,
        interesser
        }`
    );
    return data;
}

export async function fetchPerson(personSlug) {
    const data = await client.fetch(
        `*[personslug.current == $personSlug] | {
        _id,
        _createdAt,
        profilbilde {asset->{url}, alt},
        personnavn,
        epost,
        bio,
        interesser,
        "personslug": personslug.current,
        "personlogg": *[_type=='logg' && references(^._id)]{
          _id,
          _createdAt,
          loggdato,
          loggpersoner[]-> {
            personnavn
          },
          loggbeskrivelse,
          loggtimer,
        } | order(loggdato asc, _createdAt asc)
    }`, {personSlug}
    );
    return data[0];
}