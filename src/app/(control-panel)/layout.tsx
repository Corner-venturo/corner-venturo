import MainLayout from '@/components/MainLayout';
import AuthGuard from '@/components/AuthGuard';

function Layout({ children }) {
	return (
		<AuthGuard requireAuth={true}>
			<MainLayout>{children}</MainLayout>
		</AuthGuard>
	);
}

export default Layout;
