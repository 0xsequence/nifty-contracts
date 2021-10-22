// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@0xsequence/erc-1155/contracts/tokens/ERC1155PackedBalance/ERC1155MintBurnPackedBalance.sol';
import '@0xsequence/erc-1155/contracts/tokens/ERC1155/ERC1155Metadata.sol';

import './utils/Initializable.sol';
import './utils/Ownable.sol';


contract NiftyupNFT is Initializable, Ownable, ERC1155MintBurnPackedBalance, ERC1155Metadata {
  constructor (uint256 _bits) ERC1155MintBurnPackedBalance(_bits) {}

  /**
   * @notice Constructor for proxy instances, initializes the contract with given values
   * @dev This method can only be called once
   * @param _owner             Owner of the NFT contract
   */
  function initialize(
    address _owner
  ) external initializer {
    _transferOwnership(_owner);
  }

  /**
   * @notice Mint _amount of tokens of a given id, if allowed.
   * @param _to      The address to mint tokens to
   * @param _id      Token id to mint
   * @param _amount  The amount to be minted
   * @param _data    Data to pass if receiver is contract
   */
  function mint(
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes memory _data
  ) external onlyOwner {
    _mint(_to, _id, _amount, _data);
  }

  /**
   * @notice Mint tokens for each ids in _ids
   * @dev This methods assumes ids are sorted by how the ranges are sorted in
   *      the corresponding mintAccessRanges[msg.sender] array. Call might throw
   *      if they are not.
   * @param _to      The address to mint tokens to.
   * @param _ids     Array of ids to mint
   * @param _amounts Array of amount of tokens to mint per id
   * @param _data    Byte array of data to pass to recipient if it's a contract
   */
  function batchMint(
    address _to,
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory _data
  ) external onlyOwner {
    _batchMint(_to, _ids, _amounts, _data);
  }

  /**
   * @notice Burn _amount of tokens of a given id from msg.sender
   * @dev This will not change the current issuance tracked in _supplyManagerAddr.
   * @param _id     Asset id to burn
   * @param _amount The amount to be burn
   */
  function burn(uint256 _id, uint256 _amount) external {
    _burn(msg.sender, _id, _amount);
  }

  /**
   * @notice Burn _amounts of tokens of given ids from msg.sender
   * @dev This will not change the current issuance tracked in _supplyManagerAddr.
   * @param _ids     Asset id to burn
   * @param _amounts The amount to be burn
   */
  function batchBurn(uint256[] calldata _ids, uint256[] calldata _amounts) external {
    _batchBurn(msg.sender, _ids, _amounts);
  }

  /**
   * @notice Prevents receiving Ether or calls to unsuported methods
   */
  fallback() external {
    revert('UNSUPPORTED_METHOD');
  }

  /**
   * @dev Will update the base URL of token's URI
   * @param _newBaseMetadataURI New base URL of token's URI
   */
  function setBaseMetadataURI(string calldata _newBaseMetadataURI) external onlyOwner {
    _setBaseMetadataURI(_newBaseMetadataURI);
  }

  /**
   * @notice Query if a contract implements an interface
   * @param _interfaceID  The interface identifier, as specified in ERC-165
   * @return `true` if the contract implements `_interfaceID`
   */
  function supportsInterface(bytes4 _interfaceID)
    public
    pure
    virtual
    override(ERC1155PackedBalance, ERC1155Metadata)
    returns (bool)
  {
    return super.supportsInterface(_interfaceID);
  }
}
