/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const {fbInternalOnly, fbContent} = require('internaldocs-fb-helpers');

module.exports = {
  features: {
    Features: [
      'features/index',
      'features/share-flipper-data',
      'features/react-native',
      ...fbInternalOnly(['fb/plugins']),
    ],
    Plugins: [
      {
        type: 'autogenerated',
        dirName: 'features/plugins',
      },
    ],
  },
  setup: {
    'Getting Started': [
      'getting-started/index',
      {
        'Adding Flipper to your app': [
          ...fbContent({
            external: [
              'getting-started/android-native',
              'getting-started/ios-native',
            ],
            internal: [
              {
                Android: [
                  'fb/Add-flipper-to-android-app',
                  'getting-started/android-native',
                ],
                iOS: [
                  'fb/Adding-flipper-to-ios-app',
                  'getting-started/ios-native',
                ],
              },
            ],
          }),
          {
            'React Native': [
              'getting-started/react-native',
              'getting-started/react-native-android',
              'getting-started/react-native-ios',
            ],
          },
          'getting-started/javascript'
        ],
      },
      ...fbInternalOnly(['getting-started/fb/connecting-to-flipper']),
      ...fbInternalOnly(['getting-started/fb/flipper-on-demand']),
      'troubleshooting',
      {
        'Other Platforms': [
          'extending/new-clients',
          'extending/establishing-a-connection',
          'extending/supporting-layout',
        ],
      },
    ],
    'Plugin Setup': [
      {
        type: 'autogenerated',
        dirName: 'setup/plugins',
      },
    ],
    Advanced: [
      'custom-ports',
      'stetho',
      ...fbInternalOnly(['fb/www-certificate-exchange']),
    ],
  },
  extending: {
    Tutorial: [
      'tutorial/intro',
      'tutorial/ios',
      'tutorial/android',
      'tutorial/react-native',
      'tutorial/javascript',
      'tutorial/js-setup',
      'tutorial/js-table',
      'tutorial/js-custom',
      'tutorial/js-publishing',
    ],
    'Development workflow': [
      'extending/dev-setup',
      'extending/loading-custom-plugins',
      'extending/desktop-plugin-structure',
      'extending/testing',
      'extending/debugging',
      ...fbInternalOnly([
        'fb/adding-analytics-0',
        'extending/fb/plugin-documentation',
      ]),
      'extending/plugin-distribution',
      'extending/sandy-migration',
    ],
    'Desktop plugin APIs': [
      'extending/flipper-plugin',
      'extending/styling-components',
      'extending/deeplinks',
      ...fbInternalOnly([
        {
          'QPL linting': ['fb/building-a-linter', 'fb/active-linters'],
        },
      ]),      
    ],
    'Client plugin APIs': [
      'extending/create-plugin',
      'extending/error-handling',
      'extending/arch',
      'extending/client-plugin-lifecycle',
      'extending/layout-inspector',
    ],
  },
  internals: {
    Internals: [
      'internals/index',
      'extending/public-releases',
      'extending/testing-rn',
      'internals/linters',
      ...fbInternalOnly([
        'fb/release-infra',
        'fb/LauncherConfig',
        'fb/hacking-on-launcher',
        'fb/Flipper-fbsource-Pinning',
        'fb/Flipper-Release-Cycle',
        'fb/Add-Support-Group-to-Flipper-Support-Form',
        'fb/Alerts',
        'fb/bundling',
        'fb/Certificate-Exchange-Diagram',
        'fb/Electron-Upgrade',
        'fb/flipper-analytics',
        'fb/Navigation-Plugin-Development-Guide',
        'fb/Oncall-Runbook',
        'fb/sandcastle',
        'fb/Star-Ratings',
        'fb/sandcastle-overview',
        'fb/error-logging',
        'fb/scribe',
        'fb/async-testing',
      ]),
    ],
  },
};
