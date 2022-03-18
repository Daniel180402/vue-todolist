const app = new Vue({
    el: "#app",
    data: {
        todoList: [ ],
        newListItem: "",
        listItem: "",
    },
    methods: {
        removeListItem(itemIndex){
            if(this.todoList[itemIndex] != undefined){
                this.todoList.splice(itemIndex, 1);
            }
            else{
                console.log("This element doesn't exist");
            }
        },
        addListItem(listItemContent){
            if(listItemContent.trim() != ""){

                const newTodoElement = {
                    text : listItemContent.trim(),
                    done : false
                }
                this.todoList.push(newTodoElement);
                this.newListItem = "";
            }
            else{
                console.warn("You have to write something to add to the list!");
            }
        },
        keymonitor: function(event) {
            console.log(event.key);
            if(event.key == "Enter")
            {
                addListItem(listItemContent);
            }
        },
        itemDone(classId, itemIndex){
            if(this.todoList[itemIndex].done == false){
                console.log("cia")
                classId.classList.add("done");
                this.todoList[itemIndex].done = true;
            }
            else{
                classId.classList.remove("done");
                this.todoList[itemIndex].done = false;
            }
        }
    }
});