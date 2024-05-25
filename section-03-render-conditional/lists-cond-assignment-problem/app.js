const app = Vue.createApp({
    data(){
        return{
            enteredText: '',
            tasks: [],
            buttonCaption: 'Hide list',
            shownList : true
        };
    },
    methods: {
        addTask(){
            if(this.enteredText === ''|| this.tasks.includes(this.enteredText)) {
                alert("Please enter another task");
                return;
            }
            this.tasks.push(this.enteredText);
            this.enteredText = '';
        },
        changeDisplay(){
            this.buttonCaption = this.shownList ? 'Show list' : 'Hide list';
            this.shownList = !this.shownList;
            
        }
    }
});
app.mount("#assignment");