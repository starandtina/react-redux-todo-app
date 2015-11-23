import { createConstants } from '../utils';

/*
 * action types
 */

export default createConstants(
  'ADD_TODO',
  'COMPLETE_TODO',
  'SET_VISIBILITY_FILTER',

  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
);
