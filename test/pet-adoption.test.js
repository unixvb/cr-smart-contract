const PetAdoption = artifacts.require("PetAdoption");

contract("PetAdoption", (accounts) => {
    let petAdoption;
    const expectedOwner = accounts[0];
    const petId = 8;

    before(async () => {
        petAdoption = await PetAdoption.deployed();
    });

    describe("adopting a pet and retrieving account addresses", async () => {
        before("adopt a pet using accounts[0]", async () => {
            await petAdoption.adopt(petId, { from: expectedOwner });
        });

        it("can fetch the address of an owner by pet id", async () => {
            const owner = await petAdoption.owners(petId);

            assert.equal(owner, expectedOwner, "The owner of the adopted pet should be the first account.");
        });

        it("can fetch the collection of all pet owners' addresses", async () => {
            const owners = await petAdoption.getOwners();

            assert.equal(owners[petId], expectedOwner, "The owner of the adopted pet should be in the collection.");
        });
    });
});
