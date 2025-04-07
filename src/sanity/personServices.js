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
        "personslug": personslug.current
        }`,
        {personSlug}
    );
    return data[0];
}