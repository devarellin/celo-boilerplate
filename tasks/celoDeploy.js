const fs = require('fs')
const path = require('path')
const { newKit } = require('@celo/contractkit');

task("deploy:celo", "Prints the list of accounts", async (taskArgs, hre) => {
    const kit = newKit('https://alfajores-forno.celo-testnet.org')
    const privateKeyPath = path.join(__dirname, '../.secret')
    const privateKey = fs.readFileSync(privateKeyPath, { encoding: 'utf-8' })
    kit.connection.addAccount(privateKey)

    const account = kit.web3.eth.accounts.privateKeyToAccount(privateKey)

    // add contracts to deploy here
    const artifact = await hre.artifacts.readArtifact('DudiERC20')
    const tx = await kit.connection.sendTransaction({
        from: account.address,
        data: artifact.bytecode
    })
    const receipt = await tx.waitReceipt()
    console.log(`Deployed contract to ${receipt.contractAddress}`)
});

