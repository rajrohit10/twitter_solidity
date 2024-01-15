// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Profile{

    struct UserProfile{

        string displayName;
        string bio;
    }

    mapping(address=> UserProfile) public profiles;

    function setProfile(string memory _displayName, string memory _bio) public {
        UserProfile memory profile=  UserProfile(_displayName,_bio);
        profiles[msg.sender]=profile;
    }
    function getProfile (address _user) external view returns (UserProfile memory){
        return profiles[_user];
    }

}