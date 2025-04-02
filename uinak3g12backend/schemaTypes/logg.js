export const logg = {
    name: "logg",
    title: "Logg",
    type: "document",
    description: "Loggføring av oppgaver og timesbruk utført av hvert enkelt gruppemedlem.",
    fields: [
        {
            name: "loggdato",
            title: "Dato",
            description: "Dato for gjennomført arbeid.",
            type: "date",
            options: {
                dateFormat: "DD-MM-YYYY",
                calenderTodayLabel: "Today"
            },
            validation: rule => rule.required().error("Feltet er obligatorisk.")
        },
        {
            name: "loggpersoner",
            title: "Personer",
            description: "Person(er) som utførte arbeidet.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "person"}]
                }
            ], 
            validation: rule => rule.required().error("Feltet er obligatorisk.")
        },
        {
            name: "loggbeskrivelse",
            title: "Beskrivelse",
            description: "Kort beskrivelse av arbeidet som ble utført. Maks 200 tegn.",
            placeholder: "'Laget react komponent for profilkort'",
            type: "string",
            validation: [
                rule => rule.required().max(200).error("Feltet er obligatorisk.")
            ]
        },
        {
            name: "loggtimer",
            title: "Antall timer",
            description: "Antall timer jobbet",
            type: "number",
            validation: [
                rule => rule.required().error("Feltet er obligatorisk.")
            ]
        },
        {
            name: "loggtags",
            title: "Tagg",
            type: "tags",
            description: "Velg en tagg som beskriver ditt arbeid, eller lage en egen.",
            options: {
                predefinedTags: [
                    {label: "Sanity", value: "sanity"},
                    {label: "React", value: "react"},
                    {label: "SASS", value: "sass"},
                    {label: "Arkitektur", value: "arkitektur"},
                    {label: "Prosjektstyring", value: "prosjektstyring"},
                    {label: "møte", value: "mote"}
                ]
            }
        }
    ]
}