// import { describe, it, expect } from 'vitest'

// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

// tests/TicTacToe.test.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TicTacToe from '../TicTacToe.vue'

describe('TicTacToe', () => {
  it('renders game board', () => {
    const wrapper = mount(TicTacToe)
    const cells = wrapper.findAll('.cell')
    expect(cells.length).toBe(9)
  })

  it('makes a move when a cell is clicked', async () => {
    const wrapper = mount(TicTacToe)
    const firstCell = wrapper.findAll('.cell')[0]
    await firstCell.trigger('click')
    expect(firstCell.text()).toBe('X')
  })

  it('switches player after move', async () => {
    const wrapper = mount(TicTacToe)
    const cells = wrapper.findAll('.cell')
    await cells[0].trigger('click')
    await cells[1].trigger('click')
    expect(cells[1].text()).toBe('O')
  })

  it('resets the game when clicking "Start again"', async () => {
    const wrapper = mount(TicTacToe)
    const cells = wrapper.findAll('.cell')
    await cells[0].trigger('click')
    expect(cells[0].text()).toBe('X')

    const resetButton = wrapper.find('button')
    await resetButton.trigger('click')

    expect(cells[0].text()).toBe('')
  })
})
