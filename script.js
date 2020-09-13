//using jQuery


let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function addItem() {                            //adding item in the list
  let listItem = $('<li>', {                    //this is the way of creating a tag using jQuery. 
    'class': 'list-group-item',                 //class is given in quotes as the properties are strings and class is a reserved keyword in js
    text: inpNewTask.val()                      //giving value to text property
  })
  listItem.click(() => {                        //this is to toggle between selected and not selected tasks
    listItem.toggleClass('done')                //toggle between class 'done'
  })
  ulTasks.append(listItem)
  inpNewTask.val('')
  toggleInputButtons()
}

function clearDone() {
  $('#ulTasks .done').remove()
  toggleInputButtons()
}

function sortTasks() {
  $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons() {
  btnReset.prop('disabled', inpNewTask.val() == '')
  btnAdd.prop('disabled', inpNewTask.val() == '')
  btnSort.prop('disabled', ulTasks.children().length < 1)
  btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

// adding enter key functionality
inpNewTask.keypress((e) => {
  if (e.which == 13) addItem()
})
inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)
btnReset.click(() => {
  inpNewTask.val('')
  toggleInputButtons()
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)