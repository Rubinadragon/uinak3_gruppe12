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
            validation: rule => rule.required()
        },
        {
            name: "loggperson",
            title: "Person",
            description: "Persom som utførte arbeidet.",
            type: "reference",
            to: [{type: "person"}],
            validation: rule => rule.required()
        },
        {
            name: "loggbeskrivelse",
            title: "Beskrivelse",
            description: "Kort beskrivelse av arbeidet som ble utført. Maks 200 tegn.",
            placeholder: "'Laget react komponent for profilkort'",
            type: "string",
            validation: [
                rule => rule.required().max(200)
            ]
        },
        {
            name: "loggtimer",
            title: "Antall timer",
            description: "Antall timer jobbet",
            type: "number",
            validation: [
                rule => rule.required()
            ]
        }
    ]

}