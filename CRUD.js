var app = new function(){
    // Getting tasks from table body and assigning it to el
    this.el = document.getElementById('tasks')
    this.task = []

    // This function displays all of the todo items
    this.FetchAll = function(){
        var data = '';

        if(this.task.length>0){
            for(i=0; i<this.task.length; i++){
                data+='<tr>';
                data+='<td>' + (i+1) + '. ' + this.task[i] + '</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="button">Edit</button></td>';
                data+='<td><button onclick="app.Delete('+i+')" class="button">Delete</button></td>';
                data+='</tr>';
            }
        }

        this.Count(this.task.length);
        return this.el.innerHTML = data
    };

    // This add elemets to the todo list
    this.Add = function(){

    };

    // This will update/edit specific items
    this.Edit = function(item){

    };

    // This will delete each item
    this.Delete = function(item){

    };

    this.Count = function(data){

    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}