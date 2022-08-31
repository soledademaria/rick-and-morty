export default {
  name: "CardInfo",

  props: {
    info: Array,
  },

    template: `
        <div class="card-infos">
            <div v-for="item in info" class="card">
                <h2> {{item.name}} </h2>
                <img :src="item.image" class="card-image"/>
            </div>
        </div>
    `
}