import { NomadConfig } from "@nomad-xyz/configuration"
export const nomadConfig: NomadConfig = {
  version: 0,
  environment: "development",
  agent: {},
  networks: [
    'rinkeby',
    'kovan',
    'moonbasealpha',
    'milkomedaC1testnet',
    'evmostestnet'
  ],
  rpcs: {
    rinkeby: ['https://rinkeby.infura.io/v3/'],
    kovan: ['https://kovan.infura.io/v3/'],
    moonbasealpha: ['https://moonbeam-alpha.api.onfinality.io/public'],
    milkomedaC1testnet: ['http://use-util.cloud.milkomeda.com:8545'],
    evmostestnet: ['https://evmos-archive-testnet.api.bdnodes.net:8545']
  },
  protocol: {
    governor: {
      id: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
      domain: 2000
    },
    networks: {
      rinkeby: {
        name: 'rinkeby',
        domain: 2000,
        connections: [
          'kovan',
          'moonbasealpha',
          'milkomedaC1testnet',
          'evmostestnet'
        ],
        specs: {
          chainId: 4,
          blockTime: 15,
          finalizationBlocks: 10,
          supports1559: true,
          confirmations: 2,
          blockExplorer: 'https://rinkeby.etherscan.io/',
          indexPageSize: 2000
        },
        configuration: {
          optimisticSeconds: 10,
          processGas: 850000,
          reserveGas: 15000,
          maximumGas: 1000000,
          governance: {
            recoveryManager: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
            recoveryTimelock: 180
          },
          updater: '0x4177372FD9581ceb2367e0Ce84adC5DAD9DF8D55',
          watchers: ['0x20aC2FD664bA5406A7262967C34107e708dCb18E']
        },
        bridgeConfiguration: {
          weth: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
          customs: [],
          mintGas: 200000,
          deployGas: 850000
        }
      },
      kovan: {
        name: 'kovan',
        domain: 3000,
        connections: ['rinkeby'],
        specs: {
          chainId: 42,
          blockTime: 4,
          finalizationBlocks: 5,
          supports1559: false,
          confirmations: 2,
          blockExplorer: 'https://kovan.etherscan.io/',
          indexPageSize: 2000
        },
        configuration: {
          optimisticSeconds: 10,
          processGas: 850000,
          reserveGas: 15000,
          maximumGas: 1000000,
          governance: {
            recoveryManager: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
            recoveryTimelock: 180
          },
          updater: '0x4177372FD9581ceb2367e0Ce84adC5DAD9DF8D55',
          watchers: ['0x20aC2FD664bA5406A7262967C34107e708dCb18E']
        },
        bridgeConfiguration: {
          weth: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
          customs: [],
          mintGas: 200000,
          deployGas: 850000
        }
      },
      moonbasealpha: {
        name: 'moonbasealpha',
        domain: 5000,
        connections: ['rinkeby'],
        specs: {
          chainId: 1287,
          blockTime: 17,
          finalizationBlocks: 20,
          supports1559: true,
          confirmations: 3,
          blockExplorer: 'https://moonbase-blockscout.testnet.moonbeam.network/',
          indexPageSize: 2000
        },
        configuration: {
          optimisticSeconds: 10,
          processGas: 850000,
          reserveGas: 15000,
          maximumGas: 1000000,
          governance: {
            recoveryManager: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
            recoveryTimelock: 180
          },
          updater: '0x4177372FD9581ceb2367e0Ce84adC5DAD9DF8D55',
          watchers: ['0x20aC2FD664bA5406A7262967C34107e708dCb18E']
        },
        bridgeConfiguration: {
          weth: '0x674421e9567653ee76e96feea3b2b2966d000dbd',
          customs: [],
          mintGas: 200000,
          deployGas: 850000
        }
      },
      milkomedaC1testnet: {
        name: 'milkomedaC1testnet',
        domain: 8000,
        connections: ['rinkeby'],
        specs: {
          chainId: 200101,
          blockTime: 4,
          finalizationBlocks: 20,
          supports1559: true,
          confirmations: 3,
          blockExplorer: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com',
          indexPageSize: 2000
        },
        configuration: {
          optimisticSeconds: 10,
          processGas: 850000,
          reserveGas: 15000,
          maximumGas: 1000000,
          governance: {
            recoveryManager: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
            recoveryTimelock: 180
          },
          updater: '0x4177372FD9581ceb2367e0Ce84adC5DAD9DF8D55',
          watchers: ['0x20aC2FD664bA5406A7262967C34107e708dCb18E']
        },
        bridgeConfiguration: {
          weth: '0x6942F4eD908bF1F294e25497624ad228d178D54C',
          customs: [],
          mintGas: 0,
          deployGas: 0,
        }
      },
      evmostestnet: {
        name: 'evmostestnet',
        domain: 9000,
        connections: ['rinkeby'],
        specs: {
          chainId: 9000,
          blockTime: 7,
          finalizationBlocks: 20,
          supports1559: true,
          confirmations: 3,
          blockExplorer: 'http://TODO',
          indexPageSize: 2000
        },
        configuration: {
          optimisticSeconds: 10,
          processGas: 850000,
          reserveGas: 15000,
          maximumGas: 1000000,
          governance: {
            recoveryManager: '0xa4849f1D96B26066f9C631FCdc8F1457D27Fb5EC',
            recoveryTimelock: 180
          },
          updater: '0x4177372FD9581ceb2367e0Ce84adC5DAD9DF8D55',
          watchers: ['0x20aC2FD664bA5406A7262967C34107e708dCb18E']
        },
        bridgeConfiguration: {
          weth: '0xEE8003bdB024a4195D433c555d55AA663B8C022C',
          customs: [],
          mintGas: 0,
          deployGas: 0,
        }
      }
    }
  },
  core: {
    rinkeby: {
      deployHeight: 10024912,
      upgradeBeaconController: '0xAF32dF89A761e42Fe9eC9507fBf3C4B29a6c266f',
      xAppConnectionManager: '0x7e365A910383cE8Dfa6860B080a9D4cd58d2BD13',
      updaterManager: '0xA839c6221F93a5Fc141CBB6eCe98049B4dA7Df8d',
      governanceRouter: {
        implementation: '0xEc23165a76C9Ed3c6aC1AF943d2EcD41a2DD15d4',
        proxy: '0xB1F0bB0d6a40d5003f2A62D9a146791A90270F1d',
        beacon: '0x2b9680a456b7Caa71eC4AD0764BADec1ACF14b34'
      },
      home: {
        implementation: '0xb2d91cD38E0135cF296792795dBda1e4dBF09ecf',
        proxy: '0xBfCBCCce35D8a6e8056c92f225768EbBfBbf1293',
        beacon: '0xDFA94756005F7677Ad794a7C23353D820fDA3bC7'
      },
      replicas: {
        kovan: {
          implementation: '0x2e54DAA00F7e7dc2BCf55Fd719ff040BD0549A0C',
          proxy: '0x7DF0496470369FFFACB660A5139e1649ABFE9D21',
          beacon: '0x0eD8d83d918865CE2D52da2e0dc1bC98a048A4b1'
        },
        moonbasealpha: {
          implementation: '0x2e54DAA00F7e7dc2BCf55Fd719ff040BD0549A0C',
          proxy: '0xA062dcaEc568Ccf01560F168D0638af2fE663019',
          beacon: '0x0eD8d83d918865CE2D52da2e0dc1bC98a048A4b1'
        },
        milkomedaC1testnet: {
          implementation: '0x2e54DAA00F7e7dc2BCf55Fd719ff040BD0549A0C',
          proxy: '0xf9EdA8f3ee170b64c6640094e9a8bF9cb9f359f3',
          beacon: '0x0eD8d83d918865CE2D52da2e0dc1bC98a048A4b1'
        },
        evmostestnet: {
          implementation: '0x2e54DAA00F7e7dc2BCf55Fd719ff040BD0549A0C',
          proxy: '0xbEba49276B473C1d0A7E6b37EBf24B84893C6b0C',
          beacon: '0x0eD8d83d918865CE2D52da2e0dc1bC98a048A4b1'
        }
      }
    },
    kovan: {
      deployHeight: 29367895,
      upgradeBeaconController: '0xf211E0C9BA161880c77cf320200F14f67B0Db757',
      xAppConnectionManager: '0xE469D8587D45BF85297BD924b159E726E7CA5408',
      updaterManager: '0xf7531cCAe62Baa4db849d5A924873508E8f07084',
      governanceRouter: {
        implementation: '0x53Bf44287FfdF004667B84ae0B0BF8df865B5Bd6',
        proxy: '0x25d3Da24cA79E80D15f808866351311D282AC332',
        beacon: '0x06Ea2aBbc7e8E36ea4e39995E4cFA0A8dC839E4c'
      },
      home: {
        implementation: '0x79562CeA327F974a278a2cc4ca028f17DAAe8Fe3',
        proxy: '0x4071e4E6AB8F8F1620200B7CF0b92ba930D9aBB6',
        beacon: '0x586DdcCaC0E6860497929337A2BA330D1a9d9926'
      },
      replicas: {
        rinkeby: {
          implementation: '0x8A80721587C72761627b558B1aBa889B30dda590',
          proxy: '0xFA58C14B693C44140208211dDa4A81c182B557c1',
          beacon: '0xcABA12F852A0bd9218C4d912b2D35E621e56c2d2'
        }
      }
    },
    moonbasealpha: {
      deployHeight: 1555095,
      upgradeBeaconController: '0x8205b57332fB1d332BFbCAFF6F386c77AA97fC96',
      xAppConnectionManager: '0xD99E2c5eD0AacE4c459A850bd2DE0b1c0De12bfD',
      updaterManager: '0xF53526c7DC4276c9311Ea89aF79E45d91cFcaFe1',
      governanceRouter: {
        implementation: '0x9361517c61C8144e8fba42ec45CA44868505d46E',
        proxy: '0x22431cD0b489f148fd34baEE3AcCF815750AC732',
        beacon: '0x9DD8fD7e34D9AdFF5B5333a0eCa52B8017f4aBBa'
      },
      home: {
        implementation: '0x2f10388e07e2131d1eBb494FE8b33A47E39aFcd4',
        proxy: '0x79F0267e3e4E457E13Ed79552D3606382bb0F66a',
        beacon: '0x85a0D1834AA4FeF38B4e5E91A718F34b545cF9A3'
      },
      replicas: {
        rinkeby: {
          implementation: '0xf06EECC237d3fC74Efeb848441eFf12CF85ae904',
          proxy: '0x6d8aCF60f3ddB6C49dEF2A2b77E56BE2FF1502Cf',
          beacon: '0xdDd8b23487ec3e4B02427713ACf03D2A0c1700D6'
        }
      }
    },
    milkomedaC1testnet: {
      deployHeight: 1771254,
      upgradeBeaconController: '0x7A9CA7500C8D6f66FACD373f64F65fC8E9e11742',
      xAppConnectionManager: '0xf116142af150F8E2b939C14f746a67Ed6788266C',
      updaterManager: '0xd685f14522Ea053A6aC7CcDEB2c1CD1E54714dA6',
      governanceRouter: {
        implementation: '0x9eb1A4075c8484eb3dCF67DA7EE87b2093218CFe',
        proxy: '0x66daa391eF8679b08246Ab9a5F56EBc5Eb6489c8',
        beacon: '0x75f5a07e565915442BCC7F98962714Fec4CcF05D'
      },
      home: {
        implementation: '0x0507f12B31276Ed8EDDFD6F463477aD64AD9dA45',
        proxy: '0x8e68819f8596B7D23CBfe1D8A0605675c1eD646f',
        beacon: '0x215F582A1352367576ed9b5cB243B32bd9D82d02'
      },
      replicas: {
        rinkeby: {
          implementation: '0x6A5F9531D1877ebE96Bc0631DbF64BBCf1f7421c',
          proxy: '0x53E7F6AFbECBB18a8E4989b89ADB1f0ce85272F5',
          beacon: '0x2b64caC924047E240a894E93A38f7Ddfa82296A2'
        }
      }
    },
    evmostestnet: {
      deployHeight: 0,
      upgradeBeaconController: '0x65e93C067889D8c6bac8c110005f4c395124Fb2B',
      xAppConnectionManager: '0xbDcFeDDD1d19bAE265592ddf3158E25dC1Af2956',
      updaterManager: '0x526a78EC24a727D98A56b9205AB3Ac4200092241',
      governanceRouter: {
        implementation: '0x38789A24CF7bD4b1f3Bf5ceBb7498C2662DE92D3',
        proxy: '0x532814a2b5A5F4a30FD31D03aB32936D95A4E581',
        beacon: '0x0aE0010822fcCb4778d18C5DfEcB53Ac6074dDf4'
      },
      home: {
        implementation: '0x8afF8c2bc89adB1620edA1E52fDc1f3D64AF8502',
        proxy: '0x0DAB5407446BFeBb16990C8F586A91Ba7bb2c189',
        beacon: '0x9b1b80eCbb23a07f6eDD2023897D46aF942b6D6e'
      },
      replicas: {
        rinkeby: {
          implementation: '0x091264137364018A14E80D477922C334A20574a4',
          proxy: '0xE6034B2F02fFe38563c0F96252577ceeDB00B4f5',
          beacon: '0x89784cEa6baF552f49a98DaFF2c16730E9d2488f'
        }
      }
    }
  },
  bridge: {
    rinkeby: {
      deployHeight: 10024912,
      bridgeRouter: {
        implementation: '0x0754Db4C98F4B28c48228103d9770f1940079934',
        proxy: '0xeACafFb9fBCe3d4c4C5D07AF5DFa51CcF5a348b7',
        beacon: '0x7274963E5A70f9d6d441847Ee000105dd710cAb5'
      },
      tokenRegistry: {
        implementation: '0x3ac3C18A00bA186314dc8f0Ca89D869A4262fFFB',
        proxy: '0x885A8bd4be130422AEB1Eb9Eeb9513a5D2102cad',
        beacon: '0x4d911A52837703708CB2bc733CcBD87726dEA3Cc'
      },
      bridgeToken: {
        implementation: '0x0C4501f2088c4963286CE5E9a5080a31F17b1a87',
        proxy: '0xa6391c179beF326c42E0f1eaEb3764412d9CdccB',
        beacon: '0xeC13CC62F5823143f4bB74DA0C74931e3eB344AD'
      },
      ethHelper: '0x074cd4d8629445Fda3b17574FCB848eda767058b'
    },
    kovan: {
      deployHeight: 29367895,
      bridgeRouter: {
        implementation: '0x01652e694BbD82C0900776c0406C3DFaa00e1e91',
        proxy: '0xa50E2db92c48f1c20C42338e6091E6B73da376a4',
        beacon: '0x5D1F5F8eF74Fb8626FE2d482618F8517a3cBD8F7'
      },
      tokenRegistry: {
        implementation: '0x3e8391dEB0f2ad863d8b61dfbcadE009BD5243A1',
        proxy: '0x7fe65Cd0b589B39E7744DE73ad225085F0FE7f39',
        beacon: '0xB4D1355eB66122a768BCE006b0Ef7219aC1dae35'
      },
      bridgeToken: {
        implementation: '0xc56D98fE297D0Fa6699e760c6760A4A8Ffbe32Cf',
        proxy: '0x0fC39710d455416243AB27a13EE7ea709d5685f3',
        beacon: '0xb3808FE90989C90Fb986A3EC10f91D5901bb7801'
      },
      ethHelper: '0xEFf85cD6763fEc984470bB1F433777d73aF1298B'
    },
    moonbasealpha: {
      deployHeight: 1555095,
      bridgeRouter: {
        implementation: '0x87CCF662058697873F6801e40223a6f405587ab5',
        proxy: '0x07235F5AE672B80649D79ebceBe749Ba4E520754',
        beacon: '0xf1B83D100860887aEf35e50b3794E28dC744E5Ce'
      },
      tokenRegistry: {
        implementation: '0xed03a3E1d4f93426F1452ed431B4652B81530e11',
        proxy: '0x9F671D2A7e48b97Ad7E080fbf495d060c536De94',
        beacon: '0xAA141aeE401aA2EE26D6F8BEC2618646C637250f'
      },
      bridgeToken: {
        implementation: '0xC2E60527846361983C6ccf37d6e44d1b08037755',
        proxy: '0x5d0dA0399e8A2585FA14B25050A735fb19A45b09',
        beacon: '0x44FDda0aaB4153BA759599A4746389ccB546Bd8d'
      },
      ethHelper: '0x71a0CAfbc6bd7F16188B141850d9Bdce47981B1c'
    },
    milkomedaC1testnet: {
      deployHeight: 1771254,
      bridgeRouter: {
        implementation: '0xd7A0Ef9172f313CE07a6A5753B39E28dcDa470DE',
        proxy: '0x4C2e47cA4Dd7b93A62730e463BE43A0EA01c5A10',
        beacon: '0xcccc2467663626B99AE440c4F42473fC95AD3367'
      },
      tokenRegistry: {
        implementation: '0xb45424Ac6f5F2f23433d078827F5d8b4e3996211',
        proxy: '0xC2205CA7803B21748AC2854994Cfe10E5440CDEf',
        beacon: '0x9298eaF94667281000e7367Fb283049b5e26FD87'
      },
      bridgeToken: {
        implementation: '0x67038c87496595086B5286A24fb9abb60e0e83BF',
        proxy: '0x6560683E75d8bA788C53f9Bc1d570b5b43120CDC',
        beacon: '0xfEE05681677D1C4151B289E138c30F2d1A30dBd6'
      },
      ethHelper: '0x3Ec2235bFdBcA03C3709c97D23f9d72c75F8A7Dd'
    },
    evmostestnet: {
      deployHeight: 42494,
      bridgeRouter: {
        implementation: '0xc58557F147785096330Bb05e2295FcA858C53663',
        proxy: '0xA77aF25f6a7f3D043394DFA96ac93565bE0CBe2d',
        beacon: '0x7e769C2a3D79877DEB72dcb0f842fc48D7a9d732'
      },
      tokenRegistry: {
        implementation: '0xA9b74cEe7B6AafD44280834CF9440b578260D821',
        proxy: '0x9EEDb4E71296a17A52DBA260906394bC559E35E2',
        beacon: '0xd1e1c4709735398a224ec90a984F6f2e02086C60'
      },
      bridgeToken: {
        implementation: '0xEbF5dAB633A6f63Ac488778A6BcD64bD66120F3e',
        proxy: '0xa2CF63f282C5a379417f69e86106A54443b5b2ca',
        beacon: '0xd9D656c4c8de9e66422589724796e2514fa59B1c'
      },
      ethHelper: '0xac3f0fB1De6A8C2d93471aE3A1F8bE6968B1FbcF'
    }
  },
  bridgeGui: {
    rinkeby: {
      displayName: 'Rinkeby',
      nativeTokenSymbol: 'ETH',
      // chainId: 4
    },
    kovan: {
      displayName: 'Kovan',
      nativeTokenSymbol: 'kETH',
      // chainId: 42
    },
    moonbasealpha: {
      displayName: 'Moonbase Alpha',
      nativeTokenSymbol: 'DEV',
      // chainId: 1287
    },
    milkomedatestnet: {
      displayName: 'Milkomeda Testnet',
      nativeTokenSymbol: 'milkADA',
      // chainId: 200101
    },
    evmostestnet: {
      displayName: 'Evmos Testnet',
      nativeTokenSymbol: 'tEVMOS',
      // chainId: 9000
    }
  }
}