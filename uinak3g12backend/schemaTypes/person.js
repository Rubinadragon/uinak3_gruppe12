import { slugify } from "./slugify";

export const person = {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
      {
        name: 'profilbilde',
        title: 'Profilbilde',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            description: 'Beskrivelse for skjermlesere',
          },
        ],
      },
      {
        name: 'personnavn',
        title: 'Navn',
        type: 'string',
      },      
      {
        name: 'epost',
        title: 'E-post',
        type: 'string',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      {
        name: 'interesser',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'personslug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'personnavn',
          slugify: slugify,
        },
      },
    ],
    preview: {
      select: {
        title: 'personnavn',
        subtitle: 'epost',
        media: 'profilbilde',
      },
    },
  };