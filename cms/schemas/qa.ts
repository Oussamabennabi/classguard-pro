const qa = {
    name: 'qa',
    title: 'Q&A',
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
      },
      {
        name: 'qaPairs',
        title: 'QA Pairs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'text',
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  }
  
  export default qa
  