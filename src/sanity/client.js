import { createClient } from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: "zs6nr3os",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-04-02"
});