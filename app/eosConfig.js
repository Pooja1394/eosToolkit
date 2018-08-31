// Are we on the testnet?
const testnet = true;

// Configuration options for EOS and Scatter
const scatterConfig = {
  blockchain: 'eos',
  host: testnet ? '193.93.219.219' : '193.93.219.219', // ( or null if endorsed chainId )
  port: testnet ? '8888' : '8888', // ( or null if defaulting to 80 )
  chainId: testnet
    ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
    : '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca', // Or null to fetch automatically ( takes longer )
};

const scatterEosOptions = {
  broadcast: true,
  sign: true,
  chainId: testnet
    ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
    : '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca', // Or null to fetch automatically ( takes longer )
};

const eosConfig = {
  httpEndpoint: testnet ? 'http://193.93.219.219:8888' : 'http://193.93.219.219:8888', // ( or null if endorsed chainId )
  broadcast: true,
  sign: true,
  chainId: testnet
    ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
    : '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca', // Or null to fetch automatically ( takes longer )
};

export default eosConfig;
export { scatterConfig, scatterEosOptions, eosConfig, testnet };
