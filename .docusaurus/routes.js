
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','836'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','6a2'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/making-transfers/fees',
        component: ComponentCreator('/making-transfers/fees','eba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/making-transfers/marketplace',
        component: ComponentCreator('/making-transfers/marketplace','727'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/making-transfers/purchasing',
        component: ComponentCreator('/making-transfers/purchasing','890'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/making-transfers/redeemandtransfer',
        component: ComponentCreator('/making-transfers/redeemandtransfer','e37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/making-transfers/trading',
        component: ComponentCreator('/making-transfers/trading','b17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/roadmap',
        component: ComponentCreator('/roadmap','15d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/team',
        component: ComponentCreator('/team','92e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tearms',
        component: ComponentCreator('/tearms','eb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tokeconomics/nft-market',
        component: ComponentCreator('/tokeconomics/nft-market','fbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tokeconomics/stablecoin',
        component: ComponentCreator('/tokeconomics/stablecoin','75b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tokeconomics/supply-governance',
        component: ComponentCreator('/tokeconomics/supply-governance','1a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tokeconomics/wrapping',
        component: ComponentCreator('/tokeconomics/wrapping','049'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
