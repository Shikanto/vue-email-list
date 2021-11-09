Vue.config.devtools = true;

new Vue({
    el: "#randomEmailApp",
    data: {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      listRandomEmails: [],
      numberEmails: 10,
      /* pendingEmails: 0, */
      
    },
    methods: {
        generateListEmails(emailToGenerated){
            for (let i = 0; i < emailToGenerated; i++) {
                this.getRandomEmail();
            }
        },

        getRandomEmail(){

            this.pendingEmails ++

            axios.get(this.apiUrl).then((ajaxResponse) => {
                
                const rispostaServer = ajaxResponse.data;
                this.randomEmail = rispostaServer.response
                this.listRandomEmails.push(this.randomEmail)
                /* checkEmail() */
            });
        },
       /*  checkEmail(){
            if (this.pendingEmails === numberEmails){
                
            }
        } */
    }
})

