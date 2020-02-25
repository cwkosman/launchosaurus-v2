/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'index'
    },
    {
      type: 'category',
      label: 'Plan',
      items: ['plan/plan', 'plan/identifying-stakeholders'],
    },
    {
      type: 'category',
      label: 'Implement',
      items: [
        {
          type: 'doc',
          id: 'implement/implement'
        },
        {
          type: 'category',
          label: 'Build',
          items: ['implement/build/build']
        },
        {
          type: 'category',
          label: 'Integrate',
          items: ['implement/integrate/integrate']
        },
        {
          type: 'category',
          label: 'Migrate',
          items: ['implement/migrate/migrate']
        },
      ],
    },
    {
      type: 'category',
      label: 'Test',
      items: ['test/test'],
    },
    {
      type: 'category',
      label: 'Launch',
      items: ['launch/launch'],
    }
  ]
};
