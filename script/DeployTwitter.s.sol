//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {Twitter} from "./../Twitter.sol";
import {Profile} from "./../Profile.sol";

contract DeployTwitter is Script{
    function run() external {
        vm.startBroadcast();
        Profile profile = new Profile();
        Twitter twitter = new Twitter(address(profile));
        vm.stopBroadcast();

    }

}