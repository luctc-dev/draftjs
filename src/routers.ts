import Simple from "./examples/Simple";
import ContentState from './examples/ContentState';
import CreateContentState from './examples/CreateContentState';
import SelectionState from './examples/SelectionState';
import Entity from './examples/Entity';
import RichUtilsSimple from './examples/RichUtilsSimple';
import BlockFunction from './examples/BlockFunction';
import HashTags from './examples/HashTags';

export default [
  {
    path: '/simple',
    text: 'Simple',
    component: Simple
  },
  {
    path: '/content-state',
    text: 'ContentState',
    component: ContentState
  },
  {
    path: '/create-content-state',
    text: 'Create ContentState',
    component: CreateContentState
  },
  {
    path: '/selection-state',
    text: 'SelectionState',
    component: SelectionState
  },
  {
    path: '/entities',
    text: 'Entities',
    component: Entity
  },
  {
    path: '/rich-utils',
    text: 'Rich Utils Simple',
    component: RichUtilsSimple
  },
  {
    path: '/block-function',
    text: 'Block Function',
    component: BlockFunction
  },
  {
    path: '/hashtags',
    text: 'HashTags Simple',
    component: HashTags
  }
]