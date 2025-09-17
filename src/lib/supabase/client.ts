import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			'Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'
		);
	}

	return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

export async function supabaseClientSignOut() {
	const supabase = await createClient();
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error('登出時發生錯誤:', error.message);
		throw error;
	}

	return { success: true };
}
