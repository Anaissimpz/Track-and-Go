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
  var counter= a;

  $(document).ready(function(){
      $("form#track").submit(function(a){
          var username=$("input#username").val()
          var from=$("input#from").val()
          var to=$("input#to").val()
          var time=$("input#time").val()
          counter +=1;
          var data={
              Id:counter,
              Username:username,
              From:from,
              To:to,
              Time:time,
              
          }
          firebase.database().ref().child("book/"+counter).push(data);
      })

      firebase.database().ref("book/").on("child_added", function(saf) {
        saf.forEach(function(datax) {
                  var childData = datax.val();
                console.log(childData.Username);
        $('#datas').append(`<tr><th scope="row">${childData.Username}</th> 
          <th scope="row">${childData.From}</th> <th scope="row">${childData.Id}</th> <th scope="row">${childData.To}</th>
           <th scope="row">${childData.Time}</th></tr>`)
})
      })
  })
