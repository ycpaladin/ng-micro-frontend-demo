import { Provider } from '@angular/core';
import { PlanetApplication, SwitchModes } from '@worktile/planet';
// import { ObjectType, RegistrableApp } from 'qiankun';

function loader(loading: boolean): void {
  console.log(`loading:${loading}`);
}

export interface AppConfig {
  name: string;
  entry: string;
  activeRule: string;
}

export const APPS_CONFIG: AppConfig[] = [
  {
    name: '工作台',
    entry: '/app-workbench/',
    activeRule: '/workbench'
  },
  {
    name: '系统管理',
    entry: '/app-system/',
    activeRule: '/system_mgmt'
  },
  {
    name: '业务管理',
    entry: '/app-business/',
    activeRule: '/business_mgmt'
  }
];

export const getRegistrableAppConfig = (): PlanetApplication[] => {
  return APPS_CONFIG.map(({ name, entry: resourcePathPrefix, activeRule: routerPathPrefix }, index) => ({
    name,
    hostParent: '#app-host-container',
    routerPathPrefix,
    resourcePathPrefix,
    preload: true,
    loadSerial: true,
    switchMode: SwitchModes.coexist,
    scripts: ['main.js'],
    manifest: `${resourcePathPrefix}manifest.json`,
  }));
};

export const getSubAppProvider = (): Provider[] => [];
