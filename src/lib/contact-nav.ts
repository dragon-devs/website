import type {useRouter} from "next/navigation";

type Router = ReturnType<typeof useRouter>;

/**
 * Reliably take the user to the contact form.
 * - If we're already on the home page, smooth-scroll to the #contact section
 *   (App Router hash pushes don't reliably scroll on the same page).
 * - Otherwise navigate to the home page contact anchor.
 *
 * Optionally pass a project `type` to deep-link the dedicated /contact page
 * with the development type pre-selected.
 */
export function goToContact(router: Router, pathname: string | null, type?: string) {
	if (type) {
		router.push(`/contact?type=${encodeURIComponent(type)}`);
		return;
	}

	if (pathname === "/" && typeof document !== "undefined") {
		const el = document.getElementById("contact");
		if (el) {
			el.scrollIntoView({behavior: "smooth"});
			window.history.replaceState(null, "", "/#contact");
			return;
		}
	}

	router.push("/#contact");
}
