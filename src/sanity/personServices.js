import { client } from "./client";

export async function fetchAllPerson() {
    const data = await client.fetch(
        `*[_type == "person"] | order(personnavn asc){
        _id,
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
    const date = await client.fetch(
        `*[_type == "person" && personslug.current == $personSlug] | {
        _id,
        _createdAt,
        profilbilde {asset->{url}, alt},
        personnavn,
        epost,
        bio,
        interesser
        }`,
        {personSlug}
    );
    return data[0];
}