// if (typeof window !== 'undefined') {
// 	// browser code
// 	window.addEventListener('DOMContentLoaded', (event) => {
// 		new PagefindUI({ element: '#search' });
// 	});
// }

var observer = new MutationObserver(function (mutations) {
	if (document.getElementById('search').length) {
		// console.log('Exist, lets do something');
		new PagefindUI({ element: '#search' });
		observer.disconnect();
		//We can disconnect observer once the element exist if we dont want observe more changes in the DOM
	}
});

// Start observing
observer.observe(document.body, {
	//document.body is node target to observe
	childList: true, //This is a must have for the observer with subtree
	subtree: true //Set to true if changes must also be observed in descendants.
});

// $(document).ready(function () {
// 	$('button').on('click', function () {
// 		$('p').remove();
// 		setTimeout(function () {
// 			$('#newContent').append('<p>New element</p>');
// 		}, 2000);
// 	});
// });
