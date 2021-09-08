<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="flex flex-column flex-full-center">
    <h1>
      Your emuoji:
      <Emoji :id="emojiIndex" :emoji="emojiChar" />
    </h1>
    <!-- <label>&#128512;</label> -->
    <div>
      <a target="_blank">
        <button class="btn large primary" @click="click">¡ Pop !</button>
      </a>
    </div>
  </div>
</template>

<script>
import emoji from "emoji.json";
import Emoji from "./components/Emoji.vue";
export default {
  name: "App",
  components: {
    Emoji,
  },
  data() {
    return {
      emojiIndex: null,
      emojis: [],
    };
  },
  mounted() {
    const blacklist = new Set([
      "☺️",
      "☺",
      "☹️",
      "☹",
      "☠",
      "❣",
      "❤",
      "🕳️",
      "👁‍🗨️",
      "👁️‍🗨",
      "👁‍🗨",
      "🗨",
      "🗯️",
    ]);
    this.emojis = emoji.filter((item) => !blacklist.has(item.char));
    this.click();
  },
  methods: {
    click() {
      this.emojiIndex = this.getRandomIndex(this.emojis.length);
      console.log(this.getEmojiByIndex());
    },
    getRandomEmoji() {
      return this.emojis?.length
        ? this.emojis[this.getRandomIndex(this.emojis.length)]
        : null;
    },
    getRandomIndex(arrayLength) {
      return Math.floor(Math.random() * arrayLength);
    },
    getEmojiByIndex() {
      return this.emojis[this.emojiIndex];
    },
  },
  computed: {
    emojiChar() {
      return this.getEmojiByIndex()?.char;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-full-center {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn {
  border: 0;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  transition-duration: 0.1s;
}

.btn:hover {
  background-color: #dadada;
  /* selec */
}

.btn.primary {
  background-color: rgb(25, 198, 255);
  color: white;
}

.btn.primary:hover {
  background-color: rgb(16, 180, 235);
}

.btn.large {
  padding: 10px 50px 10px 50px;
}
</style>
