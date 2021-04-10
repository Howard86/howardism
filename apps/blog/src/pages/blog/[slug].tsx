import React from "react";
import { NextSeo } from "next-seo";
import matter from "gray-matter";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { ParsedUrlQuery } from "querystring";
import { List, Center } from "@chakra-ui/react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import type { MdxRemote } from "next-mdx-remote/types";

import { MDX_SOURCE_PATH } from "@/constants/mdx";
import { filterNullValue } from "@/utils/filter";
import ThemeProvider from "@/components/common/ThemeProvider";
import BlogNavButton from "@/components/blog/BlogNavButton";
import markdown from "@/components/markdown";

interface BlogPostProps {
  mdxSource: MdxRemote.Source;
  meta: FrontMatter.Meta;
}

interface StaticPaths extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<StaticPaths> = async () => ({
  fallback: false,
  paths: readdirSync(MDX_SOURCE_PATH).map((fileName) => ({
    params: { slug: fileName.replace(/\.mdx/, "") },
  })),
});

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const sourcePath = join(MDX_SOURCE_PATH, `${slug}.mdx`);

  const source = readFileSync(sourcePath, "utf8");
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: markdown,
    provider: { component: ThemeProvider, props: {} },
  });
  return {
    props: {
      mdxSource,
      meta: filterNullValue(data) as FrontMatter.Meta,
    },
  };
};

const BlogPostPage: NextPage<BlogPostProps> = ({ mdxSource, meta }) => {
  const content = hydrate(mdxSource, {
    components: markdown,
  });

  return (
    <>
      <NextSeo title={meta.title} />

      <List display="flex" justifyContent="space-between" mb={[8, 4]}>
        <BlogNavButton title={meta.lastPostTitle} date={meta.lastPostDate} />
        <BlogNavButton title={meta.nextPostTitle} date={meta.nextPostDate} />
      </List>
      {content}
      <Center>
        <BlogNavButton />
      </Center>
    </>
  );
};

export default BlogPostPage;
