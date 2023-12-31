import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

var graphQLClientEndPoint = process.env.HYGRAPH_API_ENDPOINT ?? "";

const graphQLClient = new GraphQLClient(
  graphQLClientEndPoint
);

async function getData() {
  const posts: any[] = await graphQLClient.request(
    `
    query Assets {
      posts {
    author {
      id
      name
      picture {
        altText
        id
        url
      }
    }
    coverImage {
      altText
      id
      url
      width
      height
    }
    slug
    title
    content {
      html
    }
    id
    date
    description {
      html
    }
    excerpt
  }
    }
  `
  );

  // @ts-ignore
  return posts.posts;
}

export default async function Home() {
  const posts = await getData();
  console.log(posts);

  const postUI = posts.map((post: any, index: any) => {
    return (
      <Link href={"post/" + post.slug} key={index} id={index} className="bg-blue-grey rounded-xl p-4 pt-0 border border-transparent hover:border-white hover:cursor-pointer hover:no-underline">
        <div className="pb-4 text-white">
          <p className="font-semibold">{post.title}</p>
        </div>
        <div className="relative">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.altText}
            width={post.coverImage.width}
            height={post.coverImage.height}
            sizes="100vw"
            priority={true}
            className="rounded-lg object-contain"
          ></Image>
        </div>
      </Link>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 ">
      <div className="grid gap-6 md:grid-cols-3">{postUI}</div>
    </main>
  );
}
