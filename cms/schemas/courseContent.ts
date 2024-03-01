// schemas/qa.ts

const courseContent = {
    name: 'courseContent',
    title: 'Course Content',
    type: 'document',
    fields: [
      {
        name: 'course',
        title: 'Course',
        type: 'reference',
        to: [{type: 'courses'}],
        options: {
          ondelete: 'cascade', // Add this line for cascade deletion
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'chapters',
        title: 'Chapters',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Chapter Title',
                type: 'string',
                validation: (Rule: any) => Rule.required(),
              },
              {
                name: 'lectures',
                title: 'Lectures (The First One Will Be Free!)',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'title',
                        title: 'Lecture Title',
                        type: 'string',
                        validation: (Rule: any) => Rule.required(),
                      },
                      {
                        name: 'duration',
                        title: 'Duration',
                        type: 'string', // You can choose the appropriate type for duration
                        validation: (Rule: any) => Rule.required(),
                      },
                      // {
                      //   name: 'isFree',
                      //   title: 'Is Free?',
                      //   type: 'boolean',
                      //   validation: (Rule: any) => Rule.required(),
                      // },
                      {
                        name: 'videoUrl',
                        title: 'Video URL',
                        type: 'url',
                      },
                      {
                        name: 'video',
                        title: 'Video',
                        type: 'file',
                        options: {
                          accept: 'video/*',
                          hotspot: true,
                        },
                      },

                    ],

                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
  
  export default courseContent
  