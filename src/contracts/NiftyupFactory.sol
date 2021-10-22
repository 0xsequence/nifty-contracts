// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/proxy/Clones.sol';
import "./NiftyupNFT.sol";


contract NiftyupFactory {
  mapping(uint256 => NiftyupNFT) public implementations;

  event CreatedNFT(address indexed creator, address indexed owner, address indexed nft);

  /**
   * @notice Creates a new NiftyNFT proxy contract instance
   * @param _owner  Owner of the NFT contract
   * @param _bits   Number of bits used to store balances
   * @return Address of the created NFT contract
   */
  function create(address _owner, uint256 _bits) external returns (address) {
    NiftyupNFT clone = NiftyupNFT(Clones.clone(implementationFor(_bits)));
    clone.initialize(_owner);

    emit CreatedNFT(msg.sender, _owner, address(clone));

    return address(clone);
  }

  function implementationFor(uint256 _bits) internal returns (address) {
    require(_bits != 0 && _bits < 256 && 256 % _bits == 0, "NiftyupFactory#implementationFor: INVALID_BITS");

    address existing = address(implementations[_bits]);
    if (existing != address(0)) {
      return existing;
    }

    NiftyupNFT imp = new NiftyupNFT(_bits);
    imp.initialize(address(this));
    implementations[_bits] = imp;
    return address(imp);
  }
}
