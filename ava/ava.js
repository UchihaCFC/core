"use strict";

import pkg from 'package.json';
// -- Functions
import defaults from './defaults';
import intent from './intent';
import listen from './listen';

export default (props = {}) => {

  let state = {
    version: pkg.version,
    composer: {
      language: props.language || defaults.language,
      translator: props.translator || defaults.translator,
      nlp: props.nlp || defaults.nlp,
      classifier: props.classifier || defaults.classifier,
    },
    intents: [],
    actions: []
  }

  return Object.assign(
    {},
    intent(state),
    listen(state),
  )
}
