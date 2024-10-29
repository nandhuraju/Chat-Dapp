import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

import {ethers} from 'ethers'
const signer=ethers.Wallet.createRandom();
const admin=await PushAPI.initialize(signer,{
    env:CONSTANTS.ENV.STAGING,
})
console.log(admin,"admin");
const adminInfo=await admin.info();
console.log(adminInfo,"adminInfo");
const adminProfile=await admin.profile.info()
console.log(adminProfile,"adminProfile");
const updateAdminProfile=await admin.profile.update(
   { name:"EkoLance",
    description:"Onboarding developers to oppertunities in Web3",
    picture:"http://group-image.com"
   }
)
console.log(updateAdminProfile,"updateAdminProfile");
const EkoLanceHangoutForum=await admin.chat.group.create(
    "Ekolance Hangout Forum",
    {
        description:"A place for Web3 enthusiasts and developers",
        image:"http://group-image.com"
    }
    
)
console.log(EkoLanceHangoutForum,"ekoLanceHangoutForum");
const chatID ="04be9d942af24313386abb9cfc9b7910a18ca1ad70ef60c36f8b3357089492ba"
const fetchGroupInfo=await admin.chat.group.info(chatID)
// console.log(fetchGroupInfo,"fetchGroupInfo");
const joinEkolanceHangoutForum=await admin.chat.group.join(chatID)
console.log(joinEkolanceHangoutForum,"joinEkolanceHangoutForum");
const leaveEkolanceHangoutForum=await admin.chat.group.leave(chatID)
console.log(leaveEkolanceHangoutForum,"leaveEkolanceHangoutForum");
const sendMessageToEkolanceHangoutForum=await admin.chat.send(chatID,{content:"hello,world",type:"Text"})
console.log(sendMessageToEkolanceHangoutForum,"sendMessageToEkolanceHangoutForum");
// const sendMaria=await admin.chat.send("0x0000000000000000000000000000000",{content:"Enter a msg",type:"Text"})
console.log(fetchGroupInfo,"fetchGroupInfo");
const removeFromGroup=await admin.chat.group.remove(chatID,
    {
        role:'MEMBER',
        accounts:["0x0000000000000000000000000000000"]
    }
)
const updateGroup=await admin.chat.group.update(
    chatID,
    {
        name:"webe builders",
        desc:"hello",
        image:"URL_or_path_to_image"
    }
)

