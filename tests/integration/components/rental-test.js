import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function(assert) {
    await render(hbs`<Rental />`);

    assert.dom('article').hasClass('rental')
    assert.dom('article h3').hasText('Grand Old Mansion')
    assert.dom('article .detail.owner').hasText('Owner: Veruca Salt')
    assert.dom('article .detail.type').hasText('Type: Standalone')
    assert.dom('article .detail.location').hasText('Location: San Francisco')
    assert.dom('article .detail.bedrooms').hasText('Number of bedrooms: 15')
  });
});
