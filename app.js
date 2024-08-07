new Vue({
  el: "#app",
  data: {
    word: "",
    words: ["Prueba", "Maikol"],
    abecedario: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    matriz: [],
    times: 10,
  },
  mounted() {
    this.generatePuzle();
  },
  methods: {
    addWord() {
      this.words.push(this.word);
      this.word = "";
    },
    generatePuzle() {
      this.matriz = [];

      for (let i = 0; i < this.times; i++) {
        let row = this.generateRow();
        this.matriz.push(row);
      }

      for (const word of this.words) {
        let wordLength = word.length;
        // console.log(wordLength);

        let indexRow = parseInt(Math.random() * this.matriz.length);
        // console.log(indexRow);

        // let indexColumn = parseInt(
        //   Math.random() * this.matriz[indexRow].length
        // );
        let indexColumn = 0;

        do {
          indexColumn = parseInt(Math.random() * this.matriz[indexRow].length);
          console.log(indexColumn);
          console.log(indexColumn + wordLength > this.times);
        } while (indexColumn + wordLength > this.times);

        // console.log(this.matriz[indexRow][indexColumn]);

        let splitWord = word.split("");
        // console.log(splitWord);

        for (const [i, letter] of splitWord.entries()) {
          // console.log(letter + " " + i);
          this.matriz[indexRow][indexColumn + i] = {
            val: letter.toUpperCase(),
            bg: "primary",
          };
        }
      }
    },
    generateRow() {
      let row = [];

      for (let i = 0; i < this.times; i++) {
        let index = parseInt(Math.random() * this.abecedario.length);
        let letter = this.abecedario[index].toUpperCase();
        row.push(letter);
      }

      return row;
    },
  },
});
