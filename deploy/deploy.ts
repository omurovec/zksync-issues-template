import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

import { Wallet } from "zksync-web3";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const deployer = new Deployer(
    hre,
    Wallet.fromMnemonic(
      (hre.config.networks.zktestnet.accounts as any).mnemonic as string
    )
  );

  const artifact = await deployer.loadArtifact("BigContract");

  const contract = await deployer.deploy(artifact);

  console.log("Deployed BigContract.sol to ", contract.address);
};

export default func;
