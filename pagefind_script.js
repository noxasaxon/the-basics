// if (typeof window !== 'undefined') {
// 	// browser code
// 	window.addEventListener('DOMContentLoaded', (event) => {
// 		new PagefindUI({ element: '#search' });
// 	});
// }

function check_for_search_and_wait() {
	if (!document.getElementById('search')) {
		setTimeout(check_for_search_and_wait, 1000);
	} else {
		new PagefindUI({ element: '#search' });
	}
}

check_for_search_and_wait();
