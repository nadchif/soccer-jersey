import type {Meta, StoryObj} from '@storybook/react';

import {ReactTeamPage} from './ReactTeamPage';

const meta: Meta<typeof ReactTeamPage> = {
  title: 'React Examples',
  component: ReactTeamPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ReactTeamPage>;

export const Default: Story = {
  args: {
    shirtText: 'SJ JS',
    shirtColor: '#008800',
    sleeveColor: '#008800',
    textColor: '#fff',
  },
};
export const ARS: Story = {
  args: {
    shirtText: 'Emirates',
    shirtColor: '#f00000',
    sleeveColor: '#fff',
    shirtStyle: 'checkered',
    shirtStyleColor: '#dc0001',
    textColor: '#fff',
  },
};
export const AVL: Story = {
  args: {
    shirtText: 'CAZOO',
    shirtColor: '#670e36',
    sleeveColor: '#94bee5',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};

export const BHA: Story = {
  args: {
    shirtText: 'AMERICAN',
    shirtColor: '#398ae7',
    sleeveColor: '#398ae7',
    shirtStyle: 'striped-thin',
    shirtStyleColor: '#fff',
    textColor: '#fff',
  },
};
export const BUR: Story = {
  args: {
    shirtText: ' #|# ',
    shirtColor: '#81204c',
    sleeveColor: '#8bd3f5',
    textColor: '#fff',
  },
};
export const CHE: Story = {
  args: {
    shirtText: '3',
    shirtColor: '#001489',
    sleeveColor: '#001489',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const CRY: Story = {
  args: {
    shirtText: 'W88',
    shirtColor: '#014a97',
    sleeveColor: '#014a97',
    shirtStyle: 'striped',
    shirtStyleColor: '#ff362b',
    textColor: '#fff',
  },
};
export const FUL: Story = {
  args: {
    shirtText: 'BETVICTOR',
    shirtColor: '#fff',
    sleeveColor: '#333',
    shirtStyle: 'plain',
    textColor: '#222',
  },
};
export const LEE: Story = {
  args: {
    shirtText: 'SBOTOP',
    shirtColor: '#ffffff',
    sleeveColor: '#ffffff',
    shirtStyle: 'plain',
    textColor: '#1d4189',
  },
};
export const LEI: Story = {
  args: {
    shirtText: 'THAILAND',
    shirtColor: '#003090',
    sleeveColor: '#003090',
    shirtStyle: 'plain',
    textColor: '#fefefe',
  },
};
export const LIV: Story = {
  args: {
    shirtText: 'Standard &',
    shirtColor: '#e31b23',
    sleeveColor: '#e31b23',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const MCI: Story = {
  args: {
    shirtText: 'ETIHAD',
    shirtColor: '#98c5e9',
    sleeveColor: '#98c5e9',
    shirtStyle: 'plain',
    textColor: '#00285e',
  },
};
export const MUN: Story = {
  args: {
    shirtText: ' CHEVROLET ',
    shirtColor: '#c70101',
    sleeveColor: '#c70101',
    shirtStyle: 'plain',
    textColor: '#fed500',
  },
};
export const NEW: Story = {
  args: {
    shirtText: 'FUN88',
    shirtColor: '#fff',
    sleeveColor: '#333',
    shirtStyle: 'striped',
    shirtStyleColor: '#111',
    textColor: '#00bcf6',
  },
};
export const SHE: Story = {
  args: {
    shirtText: '## USG',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'striped-thick',
    shirtStyleColor: '#e30613',
    textColor: '#111',
  },
};
export const SOU: Story = {
  args: {
    shirtText: 'Sportsbet',
    shirtColor: '#ff0028',
    sleeveColor: '#ff0028',
    shirtStyle: 'single-band',
    shirtStyleColor: '#fff',
    textColor: '#111',
    shirtStyleDirection: 'diagonal-left',
  },
};
export const TOT: Story = {
  args: {
    shirtText: 'AIA',
    shirtColor: '#fff',
    sleeveColor: '#0a225c',
    shirtStyle: 'plain',
    textColor: '#d31145',
  },
};
export const WIG: Story = {
  args: {
    shirtText: 'ideal',
    shirtColor: '#fff',
    sleeveColor: '#002f68',
    shirtStyle: 'striped',
    shirtStyleColor: '#002f68',
    textColor: '#fff',
    textBackgroundColor: '#002f68',
  },
};
export const WHU: Story = {
  args: {
    shirtText: 'betWay',
    shirtColor: '#7d2b3a',
    sleeveColor: '#59b3e4',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const WOL: Story = {
  args: {
    shirtText: 'FiT|#',
    shirtColor: '#fdb913',
    sleeveColor: '#333',
    shirtStyle: 'plain',
    textColor: '#222',
  },
};
export const PSG: Story = {
  args: {
    shirtText: ' All ',
    shirtColor: '#00234a',
    sleeveColor: '#00234a',
    shirtStyle: 'single-band',
    shirtStyleColor: '#cc1339',
    textColor: '#fff',
    shirtStyleDirection: 'vertical',
  },
};
export const ACM: Story = {
  args: {
    shirtText: 'Emirates',
    shirtColor: '#df061b',
    sleeveColor: '#444',
    shirtStyle: 'striped',
    shirtStyleColor: '#222',
    textColor: '#fff',
  },
};
export const BAR: Story = {
  args: {
    shirtText: 'Rakuten',
    shirtColor: '#081868',
    sleeveColor: '#081868',
    shirtStyle: 'striped-thick',
    shirtStyleColor: '#84112b',
    textColor: '#fff',
  },
};
export const FCB: Story = {
  args: {
    shirtText: '-T--- ',
    shirtColor: '#d1122e',
    sleeveColor: '#d1122e',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const JUV: Story = {
  args: {
    shirtText: 'Jeep',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'striped',
    shirtStyleColor: '#222',
    textColor: '#e1ceaf',
  },
};
export const BVB: Story = {
  args: {
    shirtText: ' 1&1 ',
    shirtColor: '#f6ea32',
    sleeveColor: '#f6ea32',
    shirtStyle: 'dashed',
    shirtStyleColor: '#222',
    shirtStyleDirection: 'diagonal-right',
    textColor: '#fff',
    textBackgroundColor: '#333',
  },
};
export const CAG: Story = {
  args: {
    shirtText: '+ Inchusa',
    shirtColor: '#e4343b',
    sleeveColor: '#fff',
    shirtStyle: 'two-color',
    shirtStyleColor: '#1d2c47',
    textColor: '#fff',
  },
};
export const MON: Story = {
  args: {
    shirtText: ' FEDCOM ',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'two-color',
    shirtStyleColor: '#e53236',
    shirtStyleDirection: 'diagonal-left',
    textColor: '#fff',
  },
};

export const INT: Story = {
  args: {
    shirtText: 'PIRELI',
    shirtColor: '#1756ca',
    sleeveColor: '#1756ca',
    shirtStyle: 'waves',
    shirtStyleColor: '#222',
    textColor: '#fff',
  },
};
