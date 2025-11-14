const { createApp } = Vue;

createApp({
    data() {
        return {
            values: [],
            message: 'Hello from Vue.js!',
            count: 0
        };
    },

    methods: {
        getQuote() {
            fetch("./data.json")
                .then(data => data.json())
                .then(donnees => {
                    this.values = donnees;
                });
        },

        chooseImage(datas) {
            // analyse les valeurs de mad, wounded & talking dans le json
            //puis affiche l'image correspondante (il faut garder cet ordre)
            if (!datas.talking && !datas.mad && !datas.wounded) {
                return datas.images[0]
            } else if (datas.talking && !datas.mad && !datas.wounded) {
                return datas.images[1]
            } else if (!datas.talking && datas.mad && !datas.wounded) {
                return datas.images[2]
            } else if (!datas.talking && !datas.mad && datas.wounded) {
                return datas.images[3]
            } else if (datas.talking && !datas.mad && datas.wounded) {
                return datas.images[4]
            } else if (!datas.talking && datas.mad && datas.wounded) {
                return datas.images[5]
            } else if (datas.talking && datas.mad && !datas.wounded) {
                return datas.images[1]
            } else if (datas.talking && datas.mad && datas.wounded) {
                return datas.images[4]
            }

        },
        talk(datas) {
            datas.talking = !datas.talking; 
        },
        mad(datas) {
            datas.mad = !datas.mad; 
        },
        wounded(datas) {
            datas.wounded = !datas.wounded; 
        }

    },

    mounted() {
        this.getQuote();
    }

}).mount('#app');
