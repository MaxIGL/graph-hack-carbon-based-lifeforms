./build.sh
sleep 5
near delete hack.n1pu.testnet n1pu.testnet
sleep 5
near create-account hack.n1pu.testnet --masterAccount n1pu.testnet
sleep 5
near deploy hack.n1pu.testnet --wasmFile res/hackathon.wasm
sleep 5
near call hack.n1pu.testnet new --accountId n1pu.testnet
sleep 5
near call hack.n1pu.testnet add_entry '{"company": "Coca Cola", "co2_emissions": 1}' --accountId n1pu.testnet
