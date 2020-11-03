const username = document.getElementById('username');
const age = document.getElementById('age');
const number = document.getElementById('number');


const addbtn = document.getElementById('addbtn');
const updatebtn = document.getElementById('updatebtn');
const removebtn = document.getElementById('removebtn');


const database = firebase.database();
const rootRef = database.ref('users');

addbtn.addEventListener('click', (e) =>{
	e.preventDefault();

	database.ref('/users/' + username.value).set({
     age: age.value,
     mobile: number.value,
	});
	alert('profile created');
});


updatebtn.addEventListener('click', (e) =>{
	e.preventDefault();

	const newData = {

     age: age.value,
     mobile: number.value,
	};
	rootRef.child(username.value).update(newData);

	alert('profile update');
});


removebtn.addEventListener('click', (e) =>{
	e.preventDefault();

rootRef.child(username.value).remove();
   alert('details has been removed');
});

