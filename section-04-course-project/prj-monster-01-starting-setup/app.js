function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      countRound: 0,
      winner: null,
      logs: []
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + "%" };
    },
    disableSpecialAttack() {
      return this.countRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      console.log("playerHealth = " + value);
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "DRAW!";
      } else if (value <= 0) {
        this.winner = "YOU LOST!";
      }
    },
    monsterHealth(value) {
      console.log("monsterHealth = " + value);
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "DRAW!";
      } else if (value <= 0) {
        this.winner = "YOU WON!";
      }
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLog("Player", "attack", attackValue);
      this.attackPlayer();
      this.countRound++;
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLog("Monster", "attack", attackValue);
    },
    specialAttack() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLog("Player", "attack", attackValue);
      this.attackPlayer();
      this.countRound++;
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
        healValue = 100 - this.playerHealth;
      } else {
        this.playerHealth += healValue;
      }
      this.addLog("Player", "heal", healValue);
      this.attackPlayer();
      this.countRound++;
    },
    surrender() {
        this.winner = "YOU LOST!";
        this.playerHealth = 0;
        this.addLog("Player", "surrender", 0);
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countRound = 0;
      this.winner = null;
      this.logs = [];
    },
    addLog(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    }
  },
});
app.mount("#game");
