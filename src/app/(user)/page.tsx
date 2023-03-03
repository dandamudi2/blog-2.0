
import { previewData } from "next/headers";
import { groq } from "next-sanity";

import { client } from "../../../lib/sanity.client";

import  PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewBlogList from "../../../components/PreviewBlogList";
import BlogList from "../../../components/BlogList";

const query = groq`

*[_type=='post']{

  ...,
  author->,
  categories[]->

}| order(_createdAt desc)
`;

export default async function HomePage(){

  if(previewData()){
    return (<PreviewSuspense fallback={(
      <div role="status">
        <p role="status" className="text-center text-lg animate-pulse text-[#f7AB0A]">
          Loading Preview Data...
        </p>
      </div>
      
    )}>Preview Model  <PreviewBlogList query={query} /></PreviewSuspense>)
  }

  const posts = await client.fetch(query);
  console.log("srinivasu");
     console.log(posts);
  return(
    <div>
      
      <BlogList posts={posts} />
    </div>
  )
}