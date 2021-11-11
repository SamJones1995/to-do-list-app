
function newItem(){

	let li = $('<li></li>');
	  let inputValue = $('#input').val();
	  li.append(inputValue);

	  if (inputValue === '') {
	    alert("You must write something!");
	  } else {
	    $('#list').append(li);
	  }

	 function crossOut() {
	    li.toggleClass('strike');
	  }

	  li.on('dblclick',  crossOut);

	  let deleteButton = $('<deletebutton></deletebutton>');
	  deleteButton.append(document.createTextNode('X'));
	  li.append(deleteButton);

	  function deleteListItem() {
	  	li.addClass('delete');
	  }

	  deleteButton.on('click', deleteListItem);

	  $('#list').sortable()

}

