const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
      image: null,
      hasError: false,
      inputBackgroundColor: 'white',
      showHint: false,
      categories: ['greetings', 'colors', 'verbs'],
      level: 'easy',
      sentence: 'abc',
      firstName: '',
      lastName: '',
      firstNameAndLastName: '',
      spanishWords: ['hola', 'adios', 'uno', 'dos'],
      circleType: '',
      imageAlt: '',

      // Object example
      word: { a: 'hola', b: 'hello' },

      // Array of objects example
      // words: [
      //   { wordA: 'hola', wordB: 'hello' },
      //   { wordA: 'adios', wordB: 'goodbye' },
      //   { wordA: 'uno', wordB: 'one' },
      //   { wordA: 'dos', wordB: 'two' },
      // ],
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    shortSpanishWords() {
      return this.spanishWords.filter((word) => word.length <= 3);
    },
  },
  watch: {
    firstName() {
      this.firstNameAndLastName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.firstNameAndLastName = this.firstName + ' ' + this.lastName;
    },
  },
  methods: {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
    checkAnswer() {
      if (this.answer == '') {
        this.hasError = true;
        this.inputBackgroundColor = 'pink';
        return;
      }
      this.hasError = false;
      this.inputBackgroundColor = 'white';
      this.correct = this.wordB == this.answer;
      if (this.correct) {
        this.correct = true;
        this.circleType = 'check';
        this.imageAlt = 'Check mark';
      } else {
        this.correct = false;
        this.circleType = 'x';
        this.imageAlt = 'X mark';
      }
      this.showFeedback = true;
    },
    reset() {
      this.answer = '';
      this.showFeedback = false;
      this.image = null;
      this.imageAlt = null;
    },
  },
};

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app');
