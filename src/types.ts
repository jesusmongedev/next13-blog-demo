import { JSXElementConstructor, ReactElement } from 'react'

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

export type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type SocialMedia = 'Github' | 'LinkedIn' | 'Mail' | 'Twitter';

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
