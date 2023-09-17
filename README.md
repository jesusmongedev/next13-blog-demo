This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO

- [X] Add a Dark mode switcher
- [X] Add a `404` page
- [] Add NextUI library
- [] Add `about` section 
- [] Add a `projects` section
- [] Add a `blog` section
- [ ] Add a `search` input to filter the list of posts
- [ ] Add a `sort` input to sort the list of posts

## Updates
### `0.1.0` _(03-09-2023)_
- Static Site Generation / SSG 
- Markdown files for performance and content.
### `0.1.1` _(10-09-2023)_
- Remote MDX Content Files
- `revalidatePath` endpoint `/api/revalidate?secret={{ GITHUB_TOKEN }}&path={{'/'}}` allows for revalidation of blog posts on demand.
### `0.1.2` _(12-09-2023)_
- Add a Dark mode switcher using talwindcss darkMode class and next-themes package.
- Replace react-icons with heroicons.
### `0.1.3` _(12-09-2023)_
- Add a Social Links component.
- Replace heroicons with tabler/icons.
- Extend theme colors.
- Add sections to the navigation bar.