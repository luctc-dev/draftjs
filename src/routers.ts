import Simple from "./examples/Simple";
import ContentState from './examples/ContentState';
import CreateContentState from './examples/CreateContentState';
import SelectionState from './examples/SelectionState';
import Entity from './examples/Entity';
// process.env.PUBLIC_URL -> homepage in package.json
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
]