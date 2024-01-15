// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./node_modules/@openzeppelin/contracts/access/Ownable.sol";


interface IProfile{
    struct UserProfile{

        string displayName;
        string bio;
    }



    function getProfile (address _user) external view returns (UserProfile memory);
}

contract Twitter is Ownable{

    IProfile public profileContract;

        struct Tweet {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
        }

    event TweetCreated(uint256 id, address author, string content, uint256 timestamp, uint256 likes);
    event TweetLiked(uint256 id, address author, address liker, uint256 newLikesCount);
    event TweetUnliked(uint256 id, address author, address liker, uint256 newLikesCount);


    mapping(address => Tweet[] ) public tweets;
    uint16 public  MAX_TWEET_LENGTH=280;

    

    constructor(address _profileContractAddress)  Ownable(msg.sender){
        profileContract=IProfile(_profileContractAddress);
    }

    modifier onlyRegistered(){
        IProfile.UserProfile memory userprofile = profileContract.getProfile(msg.sender);
        require(bytes(userprofile.displayName).length>0,"You need to have a profile first");
        _;
    }

    function changeMaxTweetLenth(uint16 _newMaxTweetLength)public onlyOwner{
        MAX_TWEET_LENGTH=_newMaxTweetLength;
    }
    function likeTweet(address _userAddress, uint256 _id ) external onlyRegistered{
        require(tweets[_userAddress][_id].id==_id,"Tweets does not exists");
        tweets[_userAddress][_id].likes++;
        emit TweetLiked(_id,_userAddress, msg.sender, tweets[_userAddress][_id].likes);
    }

    function unlikeTweets(address _userAddress,uint256 _id) external onlyRegistered{
        require(tweets[_userAddress][_id].id==_id,"Tweet does not exists");
        require(tweets[_userAddress][_id].likes>0,"Can not dislike tweet with 0 likes");
        tweets[_userAddress][_id].likes--;
        emit TweetUnliked(_id,_userAddress, msg.sender, tweets[_userAddress][_id].likes);
    }
    function getTotalLikes(address _author) public view returns (uint256){
        uint256 totalLikes=0;

        for (uint256 i=0; i<tweets[_author].length;i++){
            totalLikes+=tweets[_author][i].likes;
        }
        return totalLikes;

    }


    function createTweets( string memory _tweet) public onlyRegistered{
        require(bytes(_tweet).length>0,"Tweet can not be empty");
        require(bytes(_tweet).length<=MAX_TWEET_LENGTH,"Tweet can not be longer than 280 characters");

        Tweet memory tweet = Tweet((tweets[msg.sender]).length, msg.sender, _tweet,block.timestamp,0);

        tweets[msg.sender].push(tweet);
        emit TweetCreated(tweet.id, tweet.author, tweet.content, tweet.timestamp, tweet.likes);
    }
    function getTweets(address _owner ) public view returns (Tweet[] memory) {
        return tweets[_owner];
    }
    function getTweet(address _owner , uint _i)public view  returns (Tweet memory){

        return tweets[_owner][_i];
    }

}