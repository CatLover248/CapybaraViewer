import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.yusuf.capybaraviewer',
  appName: 'CapybaraViewer',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
