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
        ]
    },
    methods: {
        removeListItem(itemIndex){
            if(this.todoList[itemIndex] != undefined){
                this.todoList.splice(itemIndex, 1);
            }
            else{
                console.log("This element doesn't exist");
            }
        }
    }
});