import { useEffect, useRef, useState } from 'react';

const useIO = (options) => {
	const [elements, setElements] = useState([]);
	const [entries, setEntries] = useState([]);

	const observer = useRef(null);

	const { root, rootMargin, threshold } = options || {}

	useEffect(() => {
		if (elements.length) {
			// Connecting observer
			observer.current = new IntersectionObserver((ioEntries) => {
				setEntries(ioEntries);
			}, {
				threshold,
				root,
				rootMargin
			});

			elements.forEach(element => {
				observer.current.observe(element);
			});
		}
		return () => {
			if (observer.current) {
				// Disconnecting observer
				observer.current.disconnect();
			}
		}
	}, [elements, root, rootMargin, threshold]);

	return [observer.current, setElements, entries];
};

export default useIO;