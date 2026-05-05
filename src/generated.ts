import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// C0
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const c0Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'mToken_', internalType: 'address', type: 'address' },
      { name: 'swapFacility_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'assetBalanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'assetCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimYield',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentIndex',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disableEarning',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enableEarning',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'freeze',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'freezeAccounts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isEarningEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isFrozen',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'value_', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline_', internalType: 'uint256', type: 'uint256' },
      { name: 'signature_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'value_', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline_', internalType: 'uint256', type: 'uint256' },
      { name: 'v_', internalType: 'uint8', type: 'uint8' },
      { name: 'r_', internalType: 'bytes32', type: 'bytes32' },
      { name: 's_', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAssetCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'setYieldRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalAssets',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient_', internalType: 'address', type: 'address' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender_', internalType: 'address', type: 'address' },
      { name: 'recipient_', internalType: 'address', type: 'address' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'unfreeze',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'unfreezeAccounts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'wrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'wrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yield',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yieldRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'cap', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'AssetCapSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'mAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AssetReplacedWithM',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'AuthorizationCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'AuthorizationUsed',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'EarningDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'EarningEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Frozen',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Unfrozen',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'yield',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'YieldClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'yieldRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'YieldRecipientSet',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AccountFrozen',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AccountNotFrozen',
  },
  {
    type: 'error',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'AssetCapReached',
  },
  {
    type: 'error',
    inputs: [
      { name: 'authorizer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AuthorizationAlreadyUsed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'AuthorizationExpired',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'AuthorizationNotYetValid',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'payee', internalType: 'address', type: 'address' },
    ],
    name: 'CallerMustBePayee',
  },
  { type: 'error', inputs: [], name: 'EarningIsDisabled' },
  { type: 'error', inputs: [], name: 'EarningIsEnabled' },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'InsufficientAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'assetAvailable', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientAssetBacking',
  },
  {
    type: 'error',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amountExpected', internalType: 'uint256', type: 'uint256' },
      { name: 'amountReceived', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientAssetReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'mAvailable', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientMBacking',
  },
  {
    type: 'error',
    inputs: [
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'error',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'InvalidAsset',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  {
    type: 'error',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'InvalidRecipient',
  },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidSignatureLength' },
  { type: 'error', inputs: [], name: 'InvalidSignatureS' },
  { type: 'error', inputs: [], name: 'InvalidSignatureV' },
  { type: 'error', inputs: [], name: 'InvalidUInt240' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'NotSwapFacility' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SignatureExpired',
  },
  { type: 'error', inputs: [], name: 'SignerMismatch' },
  { type: 'error', inputs: [], name: 'ZeroAdmin' },
  { type: 'error', inputs: [], name: 'ZeroAssetCapManager' },
  { type: 'error', inputs: [], name: 'ZeroFreezeManager' },
  { type: 'error', inputs: [], name: 'ZeroMToken' },
  { type: 'error', inputs: [], name: 'ZeroPauser' },
  { type: 'error', inputs: [], name: 'ZeroSwapFacility' },
  { type: 'error', inputs: [], name: 'ZeroYieldRecipient' },
  { type: 'error', inputs: [], name: 'ZeroYieldRecipientManager' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapAdapter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const swapAdapterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'swapFacility',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'extensionOut', internalType: 'address', type: 'address' },
      { name: 'minAmountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapIn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'extensionIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'minAmountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapOut',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapRouter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'isWhitelisted', internalType: 'bool', type: 'bool' },
    ],
    name: 'whitelistToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'whitelistedToken',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wrappedMToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenIn',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'extensionOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SwappedIn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extensionIn',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SwappedOut',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isWhitelisted',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'TokenWhitelisted',
  },
  { type: 'error', inputs: [], name: 'InvalidPath' },
  { type: 'error', inputs: [], name: 'InvalidPathFormat' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'NotWhitelistedToken',
  },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  { type: 'error', inputs: [], name: 'ZeroRecipient' },
  { type: 'error', inputs: [], name: 'ZeroSwapFacility' },
  { type: 'error', inputs: [], name: 'ZeroToken' },
  { type: 'error', inputs: [], name: 'ZeroUniswapRouter' },
  { type: 'error', inputs: [], name: 'ZeroWrappedMToken' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapFacility
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const swapFacilityAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'EARNERS_LIST_IGNORED_KEY',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EARNERS_LIST_NAME',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'M_SWAPPER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'swapper', internalType: 'address', type: 'address' },
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
    ],
    name: 'canSwapViaPath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'extension', internalType: 'address', type: 'address' }],
    name: 'isAdminApprovedExtension',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'extension', internalType: 'address', type: 'address' }],
    name: 'isApprovedExtension',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'swapper', internalType: 'address', type: 'address' }],
    name: 'isMSwapper',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'extension', internalType: 'address', type: 'address' }],
    name: 'isPermissionedExtension',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'extension', internalType: 'address', type: 'address' },
      { name: 'swapper', internalType: 'address', type: 'address' },
    ],
    name: 'isPermissionedMSwapper',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'msgSender',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'registrar',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'extensionIn', internalType: 'address', type: 'address' },
      { name: 'extensionOut', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'replaceAssetWithM',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extension',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'AdminApprovedExtensionSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'extensionOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'JMIAssetReplaced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extension',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'allowed', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'PermissionedExtensionSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extension',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'swapper',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'allowed', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'PermissionedMSwapperSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extensionIn',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'extensionOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Swapped',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'extensionOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SwappedInJMI',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extensionOut',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SwappedInM',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'extensionIn',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SwappedOutM',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
    ],
    name: 'InvalidSwapPath',
  },
  {
    type: 'error',
    inputs: [{ name: 'extension', internalType: 'address', type: 'address' }],
    name: 'NotApprovedExtension',
  },
  {
    type: 'error',
    inputs: [
      { name: 'extension', internalType: 'address', type: 'address' },
      { name: 'swapper', internalType: 'address', type: 'address' },
    ],
    name: 'NotApprovedPermissionedSwapper',
  },
  {
    type: 'error',
    inputs: [
      { name: 'extension', internalType: 'address', type: 'address' },
      { name: 'swapper', internalType: 'address', type: 'address' },
    ],
    name: 'NotApprovedSwapper',
  },
  {
    type: 'error',
    inputs: [{ name: 'extension', internalType: 'address', type: 'address' }],
    name: 'PermissionedExtension',
  },
  { type: 'error', inputs: [], name: 'ZeroExtension' },
  { type: 'error', inputs: [], name: 'ZeroMToken' },
  { type: 'error', inputs: [], name: 'ZeroRegistrar' },
  { type: 'error', inputs: [], name: 'ZeroSwapper' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__
 */
export const readC0 = /*#__PURE__*/ createReadContract({ abi: c0Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"allowance"`
 */
export const readC0Allowance = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"assetBalanceOf"`
 */
export const readC0AssetBalanceOf = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'assetBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"assetCap"`
 */
export const readC0AssetCap = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'assetCap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readC0BalanceOf = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"currentIndex"`
 */
export const readC0CurrentIndex = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'currentIndex',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"decimals"`
 */
export const readC0Decimals = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readC0GetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"hasRole"`
 */
export const readC0HasRole = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"isEarningEnabled"`
 */
export const readC0IsEarningEnabled = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'isEarningEnabled',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"isFrozen"`
 */
export const readC0IsFrozen = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'isFrozen',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"name"`
 */
export const readC0Name = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"paused"`
 */
export const readC0Paused = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'paused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"symbol"`
 */
export const readC0Symbol = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"totalAssets"`
 */
export const readC0TotalAssets = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'totalAssets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readC0TotalSupply = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"yield"`
 */
export const readC0Yield = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'yield',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"yieldRecipient"`
 */
export const readC0YieldRecipient = /*#__PURE__*/ createReadContract({
  abi: c0Abi,
  functionName: 'yieldRecipient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__
 */
export const writeC0 = /*#__PURE__*/ createWriteContract({ abi: c0Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"approve"`
 */
export const writeC0Approve = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"claimYield"`
 */
export const writeC0ClaimYield = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'claimYield',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"disableEarning"`
 */
export const writeC0DisableEarning = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'disableEarning',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"enableEarning"`
 */
export const writeC0EnableEarning = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'enableEarning',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"freeze"`
 */
export const writeC0Freeze = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'freeze',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"freezeAccounts"`
 */
export const writeC0FreezeAccounts = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'freezeAccounts',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"grantRole"`
 */
export const writeC0GrantRole = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"pause"`
 */
export const writeC0Pause = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'pause',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"permit"`
 */
export const writeC0Permit = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"renounceRole"`
 */
export const writeC0RenounceRole = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"revokeRole"`
 */
export const writeC0RevokeRole = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"setAssetCap"`
 */
export const writeC0SetAssetCap = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'setAssetCap',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"setYieldRecipient"`
 */
export const writeC0SetYieldRecipient = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'setYieldRecipient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"transfer"`
 */
export const writeC0Transfer = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeC0TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unfreeze"`
 */
export const writeC0Unfreeze = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'unfreeze',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unfreezeAccounts"`
 */
export const writeC0UnfreezeAccounts = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'unfreezeAccounts',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unpause"`
 */
export const writeC0Unpause = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'unpause',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unwrap"`
 */
export const writeC0Unwrap = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'unwrap',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"wrap"`
 */
export const writeC0Wrap = /*#__PURE__*/ createWriteContract({
  abi: c0Abi,
  functionName: 'wrap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__
 */
export const simulateC0 = /*#__PURE__*/ createSimulateContract({ abi: c0Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"approve"`
 */
export const simulateC0Approve = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"claimYield"`
 */
export const simulateC0ClaimYield = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'claimYield',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"disableEarning"`
 */
export const simulateC0DisableEarning = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'disableEarning',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"enableEarning"`
 */
export const simulateC0EnableEarning = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'enableEarning',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"freeze"`
 */
export const simulateC0Freeze = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'freeze',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"freezeAccounts"`
 */
export const simulateC0FreezeAccounts = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'freezeAccounts',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"grantRole"`
 */
export const simulateC0GrantRole = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"pause"`
 */
export const simulateC0Pause = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'pause',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"permit"`
 */
export const simulateC0Permit = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateC0RenounceRole = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateC0RevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"setAssetCap"`
 */
export const simulateC0SetAssetCap = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'setAssetCap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"setYieldRecipient"`
 */
export const simulateC0SetYieldRecipient = /*#__PURE__*/ createSimulateContract(
  { abi: c0Abi, functionName: 'setYieldRecipient' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateC0Transfer = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateC0TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unfreeze"`
 */
export const simulateC0Unfreeze = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'unfreeze',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unfreezeAccounts"`
 */
export const simulateC0UnfreezeAccounts = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'unfreezeAccounts',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unpause"`
 */
export const simulateC0Unpause = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'unpause',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"unwrap"`
 */
export const simulateC0Unwrap = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'unwrap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link c0Abi}__ and `functionName` set to `"wrap"`
 */
export const simulateC0Wrap = /*#__PURE__*/ createSimulateContract({
  abi: c0Abi,
  functionName: 'wrap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__
 */
export const watchC0Event = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Approval"`
 */
export const watchC0ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"AssetCapSet"`
 */
export const watchC0AssetCapSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'AssetCapSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"AssetReplacedWithM"`
 */
export const watchC0AssetReplacedWithMEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'AssetReplacedWithM',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"AuthorizationCanceled"`
 */
export const watchC0AuthorizationCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'AuthorizationCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"AuthorizationUsed"`
 */
export const watchC0AuthorizationUsedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'AuthorizationUsed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchC0Eip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"EarningDisabled"`
 */
export const watchC0EarningDisabledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'EarningDisabled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"EarningEnabled"`
 */
export const watchC0EarningEnabledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'EarningEnabled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Frozen"`
 */
export const watchC0FrozenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Frozen',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Initialized"`
 */
export const watchC0InitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Paused"`
 */
export const watchC0PausedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Paused',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchC0RoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchC0RoleGrantedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'RoleGranted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchC0RoleRevokedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'RoleRevoked',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchC0TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Unfrozen"`
 */
export const watchC0UnfrozenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Unfrozen',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"Unpaused"`
 */
export const watchC0UnpausedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'Unpaused',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"YieldClaimed"`
 */
export const watchC0YieldClaimedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: c0Abi,
  eventName: 'YieldClaimed',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link c0Abi}__ and `eventName` set to `"YieldRecipientSet"`
 */
export const watchC0YieldRecipientSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: c0Abi,
    eventName: 'YieldRecipientSet',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapAdapterAbi}__
 */
export const readSwapAdapter = /*#__PURE__*/ createReadContract({
  abi: swapAdapterAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"swapFacility"`
 */
export const readSwapAdapterSwapFacility = /*#__PURE__*/ createReadContract({
  abi: swapAdapterAbi,
  functionName: 'swapFacility',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"uniswapRouter"`
 */
export const readSwapAdapterUniswapRouter = /*#__PURE__*/ createReadContract({
  abi: swapAdapterAbi,
  functionName: 'uniswapRouter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"whitelistedToken"`
 */
export const readSwapAdapterWhitelistedToken = /*#__PURE__*/ createReadContract(
  { abi: swapAdapterAbi, functionName: 'whitelistedToken' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"wrappedMToken"`
 */
export const readSwapAdapterWrappedMToken = /*#__PURE__*/ createReadContract({
  abi: swapAdapterAbi,
  functionName: 'wrappedMToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapAdapterAbi}__
 */
export const writeSwapAdapter = /*#__PURE__*/ createWriteContract({
  abi: swapAdapterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"swapIn"`
 */
export const writeSwapAdapterSwapIn = /*#__PURE__*/ createWriteContract({
  abi: swapAdapterAbi,
  functionName: 'swapIn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"swapOut"`
 */
export const writeSwapAdapterSwapOut = /*#__PURE__*/ createWriteContract({
  abi: swapAdapterAbi,
  functionName: 'swapOut',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"whitelistToken"`
 */
export const writeSwapAdapterWhitelistToken = /*#__PURE__*/ createWriteContract(
  { abi: swapAdapterAbi, functionName: 'whitelistToken' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapAdapterAbi}__
 */
export const simulateSwapAdapter = /*#__PURE__*/ createSimulateContract({
  abi: swapAdapterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"swapIn"`
 */
export const simulateSwapAdapterSwapIn = /*#__PURE__*/ createSimulateContract({
  abi: swapAdapterAbi,
  functionName: 'swapIn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"swapOut"`
 */
export const simulateSwapAdapterSwapOut = /*#__PURE__*/ createSimulateContract({
  abi: swapAdapterAbi,
  functionName: 'swapOut',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapAdapterAbi}__ and `functionName` set to `"whitelistToken"`
 */
export const simulateSwapAdapterWhitelistToken =
  /*#__PURE__*/ createSimulateContract({
    abi: swapAdapterAbi,
    functionName: 'whitelistToken',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapAdapterAbi}__
 */
export const watchSwapAdapterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: swapAdapterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapAdapterAbi}__ and `eventName` set to `"SwappedIn"`
 */
export const watchSwapAdapterSwappedInEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapAdapterAbi,
    eventName: 'SwappedIn',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapAdapterAbi}__ and `eventName` set to `"SwappedOut"`
 */
export const watchSwapAdapterSwappedOutEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapAdapterAbi,
    eventName: 'SwappedOut',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapAdapterAbi}__ and `eventName` set to `"TokenWhitelisted"`
 */
export const watchSwapAdapterTokenWhitelistedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapAdapterAbi,
    eventName: 'TokenWhitelisted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__
 */
export const readSwapFacility = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"EARNERS_LIST_IGNORED_KEY"`
 */
export const readSwapFacilityEarnersListIgnoredKey =
  /*#__PURE__*/ createReadContract({
    abi: swapFacilityAbi,
    functionName: 'EARNERS_LIST_IGNORED_KEY',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"EARNERS_LIST_NAME"`
 */
export const readSwapFacilityEarnersListName = /*#__PURE__*/ createReadContract(
  { abi: swapFacilityAbi, functionName: 'EARNERS_LIST_NAME' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"M_SWAPPER_ROLE"`
 */
export const readSwapFacilityMSwapperRole = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'M_SWAPPER_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"canSwapViaPath"`
 */
export const readSwapFacilityCanSwapViaPath = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'canSwapViaPath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"isAdminApprovedExtension"`
 */
export const readSwapFacilityIsAdminApprovedExtension =
  /*#__PURE__*/ createReadContract({
    abi: swapFacilityAbi,
    functionName: 'isAdminApprovedExtension',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"isApprovedExtension"`
 */
export const readSwapFacilityIsApprovedExtension =
  /*#__PURE__*/ createReadContract({
    abi: swapFacilityAbi,
    functionName: 'isApprovedExtension',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"isMSwapper"`
 */
export const readSwapFacilityIsMSwapper = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'isMSwapper',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"isPermissionedExtension"`
 */
export const readSwapFacilityIsPermissionedExtension =
  /*#__PURE__*/ createReadContract({
    abi: swapFacilityAbi,
    functionName: 'isPermissionedExtension',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"isPermissionedMSwapper"`
 */
export const readSwapFacilityIsPermissionedMSwapper =
  /*#__PURE__*/ createReadContract({
    abi: swapFacilityAbi,
    functionName: 'isPermissionedMSwapper',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"mToken"`
 */
export const readSwapFacilityMToken = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'mToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"msgSender"`
 */
export const readSwapFacilityMsgSender = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'msgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"registrar"`
 */
export const readSwapFacilityRegistrar = /*#__PURE__*/ createReadContract({
  abi: swapFacilityAbi,
  functionName: 'registrar',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapFacilityAbi}__
 */
export const writeSwapFacility = /*#__PURE__*/ createWriteContract({
  abi: swapFacilityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"replaceAssetWithM"`
 */
export const writeSwapFacilityReplaceAssetWithM =
  /*#__PURE__*/ createWriteContract({
    abi: swapFacilityAbi,
    functionName: 'replaceAssetWithM',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"swap"`
 */
export const writeSwapFacilitySwap = /*#__PURE__*/ createWriteContract({
  abi: swapFacilityAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapFacilityAbi}__
 */
export const simulateSwapFacility = /*#__PURE__*/ createSimulateContract({
  abi: swapFacilityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"replaceAssetWithM"`
 */
export const simulateSwapFacilityReplaceAssetWithM =
  /*#__PURE__*/ createSimulateContract({
    abi: swapFacilityAbi,
    functionName: 'replaceAssetWithM',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapFacilityAbi}__ and `functionName` set to `"swap"`
 */
export const simulateSwapFacilitySwap = /*#__PURE__*/ createSimulateContract({
  abi: swapFacilityAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__
 */
export const watchSwapFacilityEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: swapFacilityAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"AdminApprovedExtensionSet"`
 */
export const watchSwapFacilityAdminApprovedExtensionSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'AdminApprovedExtensionSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"JMIAssetReplaced"`
 */
export const watchSwapFacilityJmiAssetReplacedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'JMIAssetReplaced',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"PermissionedExtensionSet"`
 */
export const watchSwapFacilityPermissionedExtensionSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'PermissionedExtensionSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"PermissionedMSwapperSet"`
 */
export const watchSwapFacilityPermissionedMSwapperSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'PermissionedMSwapperSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"Swapped"`
 */
export const watchSwapFacilitySwappedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'Swapped',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"SwappedInJMI"`
 */
export const watchSwapFacilitySwappedInJmiEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'SwappedInJMI',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"SwappedInM"`
 */
export const watchSwapFacilitySwappedInMEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'SwappedInM',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapFacilityAbi}__ and `eventName` set to `"SwappedOutM"`
 */
export const watchSwapFacilitySwappedOutMEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: swapFacilityAbi,
    eventName: 'SwappedOutM',
  })
