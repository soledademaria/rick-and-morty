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
                        this.infos = res.results;
                    });
                }else{
                    this.messageError = true;
                }
            })
        }
    },


    template: `
        <div>
            <h1> Eu sou o nav bar </h1>
            <card-info>  <card-info>
        </div>
    `
}