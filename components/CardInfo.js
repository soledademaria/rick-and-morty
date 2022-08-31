export default {
  name: "CardInfo",

  data(){
    return{
      charactersDetail: false,
      dialog: {
        character: {}
      }
    }
  },

  props: {
    info: Array,
  },

  methods:{
    showCharacterDetail(character){
      this.charactersDetail = true
      this.dialog.character = character
      console.log(this.dialog.character)
    }
  },

  template: `
      <div>
        <div class="card-infos">
          <div v-for="character in info" class="card">
              <h2> {{character.name}} </h2>
              <img :src="character.image" class="card-image" @click="showCharacterDetail(character)"/>
          </div>
        </div>
        <section v-if="charactersDetail" class="characters-dialog">
        <div class="characters-dialog__container">
          <div class="characters-dialog__button">
            <button class="characters-dialog__button-close-dialog" @click="charactersDetail = false">
              X
            </button>
          </div>
          <div class="characters-dialog__container-img">
            <img :src="dialog.character.image"/>
          </div>

          <div class="characters-details">
            <h1> {{dialog.character.name}} </h1>
            <span > <strong>Localização:</strong> {{dialog.character.location.name}} </span> <br/>
            <span > <strong>Origem:</strong> {{dialog.character.origin.name}} </span> <br/>
            <span > <strong>Espécie:</strong> {{dialog.character.species}} </span>
          </div>
        </div>
      </section>
    </div>
    `
}