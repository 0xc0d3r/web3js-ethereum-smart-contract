const Web3 = require('web3');

const rpcURL = 'https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>';
const contractAddress = '0xcbbfbafedb0eb83016d2a96a4e80d30b20fa3e30';
const email = 'anesh.codes@gmail.com';
const emailHash =
  '0xbe166c9942e280bb26c7e658bec28539d4b24fc633d8be6d4b005cc204933b84';
const abi = [
  {
    constant: false,
    inputs: [{ name: 'hash', type: 'bytes32' }],
    name: 'apply',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'email', type: 'string' }],
    name: 'getApplicationID',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

const web3 = new Web3(rpcURL);

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.apply(emailHash).call((err, result) => {
  contract.methods.getApplicationID(email).call((err, result) => {
    console.log('getApplicationID', result);
  });
});
