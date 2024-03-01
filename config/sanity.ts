
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: "xl92xi1i",
  dataset: 'production',
  useCdn: true, // Enable Content Delivery Network for faster responses
  apiVersion: '2023-05-03',
});

export default client;

