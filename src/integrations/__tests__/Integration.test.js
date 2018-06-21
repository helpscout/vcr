import Integration from '../Integration'

describe('Integration', () => {
  describe('add', () => {
    test('Adds id to ids', () => {
      const o = new Integration()
      o.add('123')

      expect(o.getIds()).toContain('123')
    })

    test('Fires callback on add', () => {
      const spy = jest.fn()
      const o = new Integration()
      o.didAddId = spy
      o.add('123')

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('remove', () => {
    test('Removes id from ids', () => {
      const o = new Integration()
      o.add('123')
      o.remove('123')

      expect(o.getIds()).not.toContain('123')
    })

    test('Fires callback on remove', () => {
      const spy = jest.fn()
      const o = new Integration()
      o.didRemoveId = spy
      o.add('123')
      o.remove('123')

      expect(spy).toHaveBeenCalled()
    })
  })
})