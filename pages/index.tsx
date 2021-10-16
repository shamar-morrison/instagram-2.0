import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Instagram 2.0</title>
				<meta name="description" content="Instgram clone built with NextJS and Typescript" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	);
};

export default Home;
