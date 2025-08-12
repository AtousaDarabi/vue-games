<script setup>
import { ref } from 'vue'

const winner = ref(null) // X | O | draw
const currentPlayer = ref('X') // X | O
const board = ref(Array(9).fill(''))

const resetGame = () => {
  winner.value = null
  currentPlayer.value = 'X'
  board.value = Array(9).fill('')
}

const makeMove = (index) => {
  if (winner.value || board.value[index]) return

  board.value[index] = currentPlayer.value
  if (checkWinner()) winner.value = currentPlayer.value
  else if (!board.value.includes('')) winner.value = 'draw'
  else currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
}

const checkWinner = () => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ]

  const check = wins.some(
    ([a, b, c]) =>
      board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c],
  )

  return check
}
</script>

<template>
  <div class="container">
    <h1>Game: Tic Tac Toe</h1>
    <p v-if="winner">{{ winner === 'draw' ? 'Draw' : `Winner is: ${winner}` }}</p>
    <p v-else>Turn: {{ currentPlayer }}</p>
    <div class="board">
      <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
        {{ cell }}
      </div>
    </div>
    <button class="btn" @click="resetGame()">Start again</button>
  </div>
</template>

<style scoped>
.container {
  margin: 30 auto;
  text-align: center;
}

.board {
  display: grid;
  margin: 5px;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}

.cell {
  display: flex;
  height: 100px;
  width: 100px;
  background-color: rgb(221, 221, 221);
  border-radius: 20px;
  color: rgb(0, 0, 0);
  font-size: 36px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.cell:hover {
  opacity: 0.7;
}

.btn {
  padding: 15px 30px;
  margin-top: 30px;
  width: 200px;
  background-color: rgb(111, 104, 255);
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: white;
}

.btn:hover {
    opacity: 0.7;
}
</style>
