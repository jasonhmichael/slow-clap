import { getClassName } from './day-week-month-selector';

describe('day-week-month-selector', function() {
  describe('getClassName', () => {
    it('returns expected className(s) when selected', () => {
      expect(getClassName('day', 'day')).toEqual('selected-button left-button');
      expect(getClassName('week', 'week')).toEqual('selected-button middle-button');
      expect(getClassName('month', 'month')).toEqual('selected-button right-button');
    });

    it('returns expected className(s) when NOT selected', () => {
      expect(getClassName('day', 'week')).toEqual('unselected-button middle-button');
      expect(getClassName('week', 'month')).toEqual('unselected-button right-button');
      expect(getClassName('month', 'day')).toEqual('unselected-button left-button');
    });
  });
});
