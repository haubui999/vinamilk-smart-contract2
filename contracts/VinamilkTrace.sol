// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VinamilkTrace {
    struct MilkBatch {
        uint256 id;
        string name;
        string productionDate;
        string factory;
        string ipfsHash;
    }

    mapping(uint256 => MilkBatch) public batches;
    uint256 public batchCount;

    event BatchCreated(uint256 indexed id, string name, string ipfsHash);

    function createBatch(
        string memory _name,
        string memory _productionDate,
        string memory _factory,
        string memory _ipfsHash
    ) public {
        batchCount++;
        batches[batchCount] = MilkBatch(
            batchCount,
            _name,
            _productionDate,
            _factory,
            _ipfsHash
        );
        emit BatchCreated(batchCount, _name, _ipfsHash);
    }

    function getBatch(uint256 _id) public view returns (MilkBatch memory) {
        return batches[_id];
    }
}
