const PetToken = artifacts.require("PetToken");

module.exports = function (deployer) {
    deployer.deploy(PetToken);
};
