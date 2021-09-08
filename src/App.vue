<template>
  <div>
    <div class="flex flex-column">
      <div>
        <h1>
          Your emuoji:
          <Emoji :id="emojiIndex" :emoji="emojiChar" />
        </h1>
      </div>
      <div>
        <button class="btn large primary" @click="click">¡ Pop !</button>
      </div>
    </div>
    <div class="footer">
      Fun random
      <a
        href="https://github.com/ralcorta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./assets/GitHub-Mark-32px.png" alt="Github" />
      </a>
      project.
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
    // const blacklist = new Set([
    //   "☺️",
    //   "☺",
    //   "☹️",
    //   "☹",
    //   "☠",
    //   "❣",
    //   "❤",
    //   "🕳️",
    //   "👁‍🗨️",
    //   "👁️‍🗨",
    //   "👁‍🗨",
    //   "🗨",
    //   "🗯️",
    // ]);
    this.emojis = emoji; //.filter((item) => !blacklist.has(item.char));
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
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
}

.flex {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column {
  flex-direction: column;
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
