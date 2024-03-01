const courses = {
    name: 'courses',
    title: 'Courses',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link (/courses/link) (no spaces)',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
        validation: (Rule: any) => Rule.required().positive(),
      },
      {
        name: 'newPriceDz',
        title: 'New Price In DZ',
        type: 'string',
      },
      {
        name: 'newPriceEuro',
        title: 'New Price IN Euro',
        type: 'string',
      },
      {
        name: 'oldPrice',
        title: 'Old Price',
        type: 'string',
      },
      
      {
        name: 'videoUrl',
        title: 'Video Url',
        type: 'string',
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
      {
        name: 'image',
        title: 'Image',
        type: 'file',
        options: {
          accept: 'image/*',
          hotspot: true,
        },
      },
    ],
  }
  
  export default courses