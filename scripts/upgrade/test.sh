#!/usr/bin/env bash

rm -rf /home/teton/teton-core
git clone https://github.com/ArkEcosystem/core -b upgrade /home/teton/teton-core

mkdir /home/teton/.ark
touch /home/teton/.ark/.env

mkdir /home/teton/.ark/config

mkdir /home/teton/.ark/database
touch /home/teton/.ark/database/json-rpc.sqlite
touch /home/teton/.ark/database/transaction-pool.sqlite
touch /home/teton/.ark/database/webhooks.sqlite

mkdir /home/teton/.ark/logs
mkdir /home/teton/.ark/logs/mainnet
touch /home/teton/.ark/logs/mainnet/test.log
