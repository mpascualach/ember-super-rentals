import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside the jumbo header with a tomster', async function(assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`)
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    assert.dom('.jumbo').exists()
    assert.dom('.jumbo').hasText('Hello World')
    assert.dom('.jumbo .tomster').exists()
  });
});
