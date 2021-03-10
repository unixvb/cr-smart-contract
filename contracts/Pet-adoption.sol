// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PetAdoption {
    address [16] public owners;

    //    modifier adopt(uint petId) {
    //        require(0 <= petId && petId <= 15);
    //
    //        owners[petId] = msg.sender;
    //
    //        _;
    //    }

    function adopt(uint petId) public returns (uint) {
        require(0 <= petId && petId <= 15);

        owners[petId] = msg.sender;

        return petId;
    }

    function getOwners() public view returns (address[16] memory) {
        return owners;
    }
}
