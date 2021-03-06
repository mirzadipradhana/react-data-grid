const Editors = require('./editors');
const Formatters = require('./formatters');
const Toolbar = require('./toolbars/Toolbar');
const ToolsPanel = require('./toolbars');
const Data = require('./data/');
const Menu = require('./menu');
import Draggable from './draggable';

window.ReactDataGridPlugins = {Editors, Formatters, Toolbar, Menu, Data, ToolsPanel, Draggable};
export {Editors, Formatters, Toolbar, Menu, Data, ToolsPanel, Draggable};
