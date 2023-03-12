import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Rances' />
        <meta name='description' content={`Pokemon info ${title}`} />
        <meta name='keywords' content={`Pokemon info ${title}`} />
      </Head>
      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
