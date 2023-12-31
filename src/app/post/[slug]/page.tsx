import { GraphQLClient } from "graphql-request";
import Image from "next/image";

var graphQLClientEndPoint = process.env.HYGRAPH_API_ENDPOINT ?? "";

const graphQLClient = new GraphQLClient(
  graphQLClientEndPoint
);

export async function generateStaticParams() {
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
  }
    }
  `
  );

  // @ts-ignore
  return posts.posts.map((post: any) => {
    post.slug;
  });
}

async function getPostBySlug(slug: string) {
  const res: any = await graphQLClient.request(
    `
    query Assets($slug: String!){
    post(where: {slug: $slug}) {
    author {
      id
      name
      picture {
        altText
        id
        url
        width
        height
      }
    }
    content {
      html
    }
    coverImage {
      altText
      id
      url
    }
    description {
      html
    }
    title
    slug
    id
    date
  }
  }
    `,
    { slug: slug }
  );

  console.log(res);

  return res.post;
}

export default async function Post({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const post: any = await getPostBySlug(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:py-4">
      <h1 className="text-3xl font-bold py-8">{post.title}</h1>
      <div className="max-w-sm h-96 w-96 my-4 md:max-w-full md:w-full md:max-h-auto relative md:rounded-md">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.altText}
          width={post.coverImage.width}
          height={post.coverImage.height}
          sizes="100vw"
          priority={true}
          className="rounded-lg object-contain"
          fill
        ></Image>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content.html }}
        className="prose dark:prose-invert max-w-none"
      ></div>
    </main>
  );
}
