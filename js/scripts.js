// {
//     "name": "YOUR NAME",
//     "type": "personal",
//     "bio": "Open Source Enthusiast!",
//     "avatar": "https://github.com/YOUR_GITHUB_USERNAME.png",
//     "links": [
//       {
//         "name": "Follow me on GitHub",
//         "url": "https://github.com/YOUR_GITHUB_USERNAME",
//         "icon": "github"
//       },
//       {
//         "name": "Follow me on Twitter",
//         "url": "https://twitter.com/YOUR_TWITTER_USERNAME",
//         "icon": "twitter"
//       }
//     ],
//     "milestones": [
//       {
//         "title": "Started Freelancing",
//         "date": "December 2021",
//         "icon": "dollar",
//         "color": "grey",
//         "description": "Started freelancing",
//         "url": "https://www.eddiejaoude.io/"
//       }
//     ]
//   }


let links = [];


function generateJson() {
    links = [];
    getLinks();
    var username = document.getElementById("username").value;
    let name = document.getElementById("firstname").value + ` ` + document.getElementById("lastname").value;
    let type = document.getElementById("type").value;
    let bio = document.getElementById("bio").value;
    let avatar = `https://github.com/${username}.png`;
    var json = {
        "name": name,
        "type": type,
        "bio": bio,
        "avatar": avatar,
        "links": links,
    }

    console.log(json);

    document.getElementById("json-output").innerHTML = JSON.stringify(json);
}


// get the vlaues from the input fields in the myTable into the links array
function getLinks() {
    var myTable = document.getElementById("myTable");

    // get only the rows tbody
    var tbody = myTable.getElementsByTagName("tbody")[0];


    // get the number of rows in the tbody
    var tbodyRowCount = tbody.rows.length;

    // loop through the rows
    for (var i = 0; i < tbodyRowCount; i++) {

        // get the values in the input fields
        var name = tbody.rows[i].cells[0].getElementsByTagName("input")[0].value;
        var url = tbody.rows[i].cells[1].getElementsByTagName("input")[0].value;
        var icon = tbody.rows[i].cells[2].getElementsByTagName("input")[0].value;

        // create a link object
        var link = {
            "name": name,
            "url": url,
            "icon": icon
        }

        // push the link object into the links array
        links.push(link);
    }

}
