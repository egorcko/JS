let user_name = document.getElementById('name'),
	user_surname = document.getElementById('surname'),
	user_age = document.getElementById('age'),
	btn = document.getElementById('btn');

function User(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
};


btn.addEventListener('click', function () {
	let userData = new User(user_name.value, user_surname.value, user_age.value);
	alert("Пользователь " + userData.surname + " " + userData.name + ", его возраст " + userData.age);
});
 
