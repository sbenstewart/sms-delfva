# sms-delfva
SMS to save Democracy through an ELection using a Fair Voting Approach. This product is designed not be just one among those online applications for voting and elections, but a real game changer in developing countries,the one that does not require an internet connection. 
# why sms-delfva?
Even though we implement a block chain based application for the voting process, the major bottleneck in India would be that all the people would require an internet connectivity. We planned to fix that issue. The strategy is that the voters can use their mobile phones to vote using the SMS service.
<br>
❝ Internet is great but survival without Internet is the key. ❞
# codefundo++ 2019
This product has been developed for codefundo++ the hackathon conducted by Microsoft and the theme being to develop an application for the election process that maintains democracy in the country.
# how sms-delfva?
All the user has to do are as follows.
1. Send an SMS to the number the following to get the details in your polling station.<br>
`LIST <PINCODE>`<br>
Then the result will be the list of candidates with the parties that they stand for.
2. To vote all you have to do is the SMS.<br>
`VOTE <VOTERID> <CANDIDATE#>`<br>
The CANDIDATE# number being the number in which the candidate was listed in the above list.<br>
Finally, sms-delfva checks for the voterID in the list for that constituency and if the candidate is valid and then process the vote and sends a success or failure SMS back.
# making sms-delfva a reality
To use sms-delfva for the general elections we will have a tough process to implement. It has to be done almost like an election on a single day with the blue ink blots to prevent people from linking their counterfeit voterIDs with fake phone numbers. Once this logistical nightmare is done with, all that remains is an SMS notification about what has to be done by the voters.
# advantages
1. No logistical nightmares to transport the machines to the voting booths.
2. All people have access to mobile phones.
3. No internet connectivity needed.
4. Can be done for all types of elections.
5. Easy to make changes.
# security
We could bring the later security changes with much ease as it would be as simple as to add an extra parameter like an OTP being sent to the mail id that will be attached to the SMS message.<br>
`VOTE <VOTERID> <OTP#> <CANDIDATE#>`<br>
But this all would heavily rely on the success of the linking of the voterIDs with the mobile numbers. With this one to one mapping secure, this method would be more difficult to break.
# implementation
We would get into the details here in a moment but for having the critical data of the voter list, candidate list and the votes bank we are using the Azure blockchain.
# contributions
Feel free to fork and make changes to the code here. We will make sure that this repo is safe and easy enough for you to work on. But as this is for a hackathon we will not be able to merge those awesome pull requests you make till the end of August,2019. Sorry, if we have you waiting till then.
# the team
- [S.Ben Stewart](https://github.com/sbenstewart)
- [G.Santhosh](https://github.com/gsanthosh98)
- [Lokesh](https://github.com/lokeshvenkatesan)
<br>
<b>Have a great day :)</b>
