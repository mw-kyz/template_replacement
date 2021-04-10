 window.onload = function() {
	render();
}

function render() {
	var data = JSON.parse(document.getElementById('J_data').innerHTML),
		tpl = document.getElementById('J_tpl').innerHTML,
		len = data.length,
		oList = document.getElementsByClassName('js-list')[0],
		list = '',
		item;

	data.forEach(function(elem) {
		list += tpl.replace(/{{(.*?)}}/g, function(node, key) {
			return {
				career: elem.career,
				city: elem.city,
				salary: elem.salary,
				img: elem.img
			}[key];
		}); 

	});

	oList.innerHTML = list;
}