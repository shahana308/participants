import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Participants = () => {
  const [result, setResults] = useState([]);
  const body = {
    caseTitle: "Meeting for Jintu",
    caseNumber: 101,
    description:
      "You know, they say all men are created equal, but you look at me and you look at Samoa Joe, and you can see that statement is not true! See, normally if you go one-on-one with another wrestler, you got a 50-50 chance of winnin’. But I’m a genetic freak, and I’m not normal, so you got a 25% at best at beatin’ me! And then you add Kurt Angle to the mix? Your chances of winnin’ drasticy go down. See the three-way, at Sacrifice, you got a 33 1/3 chance of wiinnin’. But I, I got a 66 2/3 chance of winning, cause Kurt Angle KNOWS he can’t beat me, and he’s not even gonna try! So, Samoa Joe, you take your 33 1/3 chance, minus my 25 percent chance, and you got an 8 1/3 chance of winnin’ at Sacrifice! But then you take my 75 perchance chance at winnin’, if we was to go one-on-one, and to add 66 2/3 ch… percents, I got a 141 2/3 chance of winnin at Sacrifice! See, McJoe; the numbers don’t like, and they spell disaster for you at Sacrifice!",
    hearingType: "I am vengence",
    applicationNumber: 2,
    isRecorded: false,
    isPrivate: false,
    sessions: [
      {
        date: "2022-03-29T07:05:12.194Z",
        startTime: "09:00",
        endTime: "20:00",
      },
    ],
    participants: [
      {
        name: "Shavaiz Khan",
        email: "shavaiz@cxunicorn.com",
        partyName: "Others",
        role: "Judge",
        isProminent: false,
      },
      {
        name: "Marcel Malas",
        email: "marcel@cxunicorn.com",
        partyName: "Others",
        role: "Judge",
        isProminent: false,
      },
      {
        name: "Pavithra",
        email: "pavithra@cxunicorn.com",
        partyName: "Defendant",
        role: "PartyMember",
        isProminent: true,
      },
      {
        name: "Karim Hassan",
        email: "karimh@cxunicorn.com",
        partyName: "Claimant",
        role: "PartyMember",
        isProminent: true,
      },

      {
        name: "A PK",
        email: "apk@cxunicorn.com",
        partyName: "Defendant",
        role: "PartyMember",
        isProminent: false,
      },
      {
        name: "Kanika L",
        email: "kanika@cxunicorn.com",
        partyName: "Claimant",
        role: "PartyMember",
        isProminent: false,
      },
    ],
  };

  const fetchData = () => {
    var headers = new Headers();

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Authorization", "Basic YWRtaW46ZkdBdXQzZXRxMmdAR0V5Uw==");
    headers.append("Content-Type", "application/json");
    console.log(body);

    return axios
      .post(`http://cx-difc-pinedulev2.azurewebsites.net/api/hearing`, body, {
        headers,
      })
      .then(function ({ data }) {
        return data;
      })
      .catch(function (error) {
        return error;
      });
  };

  useEffect(() => {
    fetchData().then((results) => {
      setResults(results);
    });
  }, []);

  console.log(result);
  //   const url = result.map((participant, id) =>
  //     participant.joinURLs.url.replace(
  //       "https://udc-difc-staging.azurewebsites.net/",
  //       "https://udc-moj-uae-demo.azurewebsites.net/"
  //     )
  //   );

  return (
    <div>
      {result.map((participant, id) => (
        <ul>
          <li>{participant.name}</li>
          {/* <li>{url}</li> */}
        </ul>
      ))}
    </div>
  );
};

export default Participants;
