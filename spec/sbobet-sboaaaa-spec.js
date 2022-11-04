'use babel';

import SbobetSboaaaa from '../lib/sbobet-sboaaaa';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SbobetSboaaaa', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('sbobet-sboaaaa');
  });

  describe('when the sbobet-sboaaaa:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.sbobet-sboaaaa')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'sbobet-sboaaaa:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.sbobet-sboaaaa')).toExist();

        let sbobetSboaaaaElement = workspaceElement.querySelector('.sbobet-sboaaaa');
        expect(sbobetSboaaaaElement).toExist();

        let sbobetSboaaaaPanel = atom.workspace.panelForItem(sbobetSboaaaaElement);
        expect(sbobetSboaaaaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'sbobet-sboaaaa:toggle');
        expect(sbobetSboaaaaPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.sbobet-sboaaaa')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'sbobet-sboaaaa:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let sbobetSboaaaaElement = workspaceElement.querySelector('.sbobet-sboaaaa');
        expect(sbobetSboaaaaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'sbobet-sboaaaa:toggle');
        expect(sbobetSboaaaaElement).not.toBeVisible();
      });
    });
  });
});
