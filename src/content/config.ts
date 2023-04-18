// 1. Import utilities from 'astro:content'
import { defineCollection } from "astro:content";
import { blogSchema /*projectSchema*/ } from "./_schemas";

// 2. Define collection(s)
const blog = defineCollection({
  schema: blogSchema,
});

/*const project = defineCollection({
  schema: projectSchema,
});*/

// 3. Export a single 'collections' object to register collection(s)
// This key should match the name of the collection directory name in 'src/content'
export const collections = {
  blog,
  // project,
};
