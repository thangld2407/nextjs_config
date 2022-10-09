import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/app.scss';
import LayoutComponent from '@/components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<LayoutComponent>
			<Component {...pageProps} />
		</LayoutComponent>
	);
}

export default MyApp;
