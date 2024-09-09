import { type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import clsx from 'clsx';
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider';
import { getThemeSession } from './utils/theme.server';
import './tailwind.css';

export const meta: MetaFunction = () => {
  const title = 'Remix Dark Mode';
  const description = 'A demo for adding a dark mode to a Remix app.';
  const url = 'https://remix-dark-mode.vercel.app/';
  const image = `${url}remix-dark-mode.png`;

  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: 'Remix, Dark Mode' },
    { name: 'image', content: image },
    { name: 'og:url', content: url },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@matt_stobbs' },
    { name: 'twitter:site', content: '@matt_stobbs' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:alt', content: title },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const themeSession = await getThemeSession(request);

  return json({
    theme: themeSession.getTheme(),
  });
};

function App() {
  const data = useLoaderData<typeof loader>();

  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
