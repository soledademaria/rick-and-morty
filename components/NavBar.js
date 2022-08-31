import CardInfo from '../components/CardInfo.js'
export default{
    name: 'NavBar',
    components:{
        CardInfo
    },

    data(){
        return{
            name: '',
            infos: [],
            requestedError: false
        }
    },

    methods: {
        getInfos(){
            fetch(`https://rickandmortyapi.com/api/character/?name=${this.name}&status=alive`)
            .then((res) => {
                if(res.ok){
                    res.json().then((res) => {
                        this.requestedError = false;
                        this.infos = res.results;
                    });
                }else{
                    this.requestedError = true;
                }
            })
        }
    },


    template: `
        <div class="input-container">
            <div>
                <input v-model="name" class="input"></input>
                <button @click="getInfos" class="input-container__button">Buscar</button>
            </div>
            <span v-if="requestedError" class="message-error"> Ops! O personagem buscado não foi encontrado :( </span>
            <card-info v-else :info="infos"></card-info>
        </div>
    `,
}