'use client';

import {useEffect, useState} from 'react';

/**
 * True only on devices driven by a precise, hovering pointer (mouse/trackpad).
 *
 * Every mouse-reactive effect on the site — the magnet buttons, the spotlight
 * logo mask, the parallax hero orbs — is dead weight on a phone. The listeners
 * never produce a meaningful value there, but a tap still emits synthetic
 * mouse events, so each one wakes up, calls getBoundingClientRect (forced
 * layout) and re-renders. Gating them on this means touch devices don't pay
 * for them at all.
 *
 * Starts `false` so the server render and the first client render agree; the
 * media query is read in an effect, after hydration.
 */
export function useFinePointer() {
	const [finePointer, setFinePointer] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
		const update = () => setFinePointer(mq.matches);

		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	return finePointer;
}
