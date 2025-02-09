import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SolidityDataTypes", function () {
  async function deploy() {
    const [account1] = await hre.ethers.getSigners(); //acc declaration, get acc, get wallet

    const SolidityDataTypes = await hre.ethers.getContractFactory( //retrieves the smart contract we want to deploy, then stores to the variable
      "SolidityDataTypes"
    );
    const ctcSolidityDataTypes = await SolidityDataTypes.deploy(); //deploys the smart contract

    return { ctcSolidityDataTypes, account1 }; //deployed instance
  }

  describe("Deployment", function () { //unti test
    it("Constructor Executer", async function () { //Specific test instance that we want to test/simulate
      const { ctcSolidityDataTypes } = await loadFixture(deploy); //deploys

      expect(ctcSolidityDataTypes).not.to.be.undefined;
    });
  });
});