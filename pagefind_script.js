if (typeof window !== 'undefined') {
	// browser code
	window.addEventListener('DOMContentLoaded', (event) => {
		new PagefindUI({ element: '#search' });
	});
}
