const app = new Vue({
    el: "#app",
    data: {
        todoList: [
            {
                text : "Buy butter",
                done : false
            },
            {
                text : "Buy flower",
                done : false
            },
            {
                text : "Buy salad",
                done : false
            }
        ],
        newListItem: ""
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
        }
    }
});