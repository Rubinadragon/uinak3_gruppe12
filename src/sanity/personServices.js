import { client } from "./client";

export async function fetchAllPersonData() {
    const data = await client.fetch(
        `*[_type == "person"]{
        _id,
        _createdAt,
        profilbilde,
        personnavn,
        epost,
        bio,
        interesser
        }`
    )
}