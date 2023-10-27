import {useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room() {
    const {id} =useParams<string>();

    const myMeeting=async(element:HTMLElement)=>{
        const appID:number=222587725;
        const serverSecret:string="3fe2bddcbe5d81a27c1a424e95c8693d";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id, Date.now().toString(),"AjaySehwal");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Personal link',
                url:
                 window.location.protocol + '//' + 
                 window.location.host + window.location.pathname +
                  '?roomID=' +
                  id,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            ShowScreenSharingButton:true,
            layout: "Sidebar" || "Grid" || "Auto"|| undefined,
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true
          });
    } 
  return (

    <div
    style={{ width: "auto",height:"100vh"}}

    className="myCallContainer"
    ref={myMeeting}
    >

    </div>
  )
}
