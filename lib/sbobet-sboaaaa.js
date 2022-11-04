'use babel';

import SbobetSboaaaaView from './sbobet-sboaaaa-view';
import { CompositeDisposable } from 'atom';

export default {

  sbobetSboaaaaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.sbobetSboaaaaView = new SbobetSboaaaaView(state.sbobetSboaaaaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.sbobetSboaaaaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sbobet-sboaaaa:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.sbobetSboaaaaView.destroy();
  },

  serialize() {
    return {
      sbobetSboaaaaViewState: this.sbobetSboaaaaView.serialize()
    };
  },

  toggle() {
    console.log('SbobetSboaaaa was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
