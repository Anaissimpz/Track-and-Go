var config = {
    apiKey: "AIzaSyBnd1vTAgermhgkNxOwiweOH3Zw-Soyuno",
    authDomain: "track-and-go.firebaseapp.com",
    databaseURL: "https://track-and-go.firebaseio.com",
    projectId: "track-and-go",
    storageBucket: "",
    messagingSenderId: "836549472331"
  };
  firebase.initializeApp(config);
  var go=new Date();
  var a=go.getTime();
  
  $(document).ready(function(){
      $("form#track").submit(function(a){
          var username=$("input#username").val()
          var from=$("input#from").val()
          var to=$("input#to").val()
          var time=$("input#time").val()
          var data={
              Username:username,
              From:from,
              To:to,
              Time:time
          }
          firebase.database().ref().child("book").push(data);
      })

      firebase.database().ref("names/").on("child_added", function(saf) {
        saf.forEach(function(datax) {
                  var childData = datax .val();
                  console.log(childData.Age)
        $('#datas').append(`<tr><th scope="row">${childData.Name}</th> 
          <th scope="row">${childData.Email}</th> <th scope="row">${childData.Gender}</th>
           <th scope="row">${childData.Age}</th></tr>`)
})
      })
  })
