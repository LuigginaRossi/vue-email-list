const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            temporaryMails: [],
        };
    },
    methods: {
        fechtData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) =>{
            console.log(response.data);

            console.log("email:" + response.data.response);
            
            this.temporaryMails.push(response.data.response);

                if(this.temporaryMails.length === 10){
                    this.mails = this.temporaryMails;
                };   

            });
        },
        generateMails () {   
            for (let i = 0; i < 10; i ++) {  
                this.fechtData();
            };    
        },
        // deleteArray(){
        //     this.termporaryMails = [];
        //     console.log(this.temporaryMails)
        // }
    },
    mounded(){
    },    
}).mount("#app")