var config = {
    apiKey: "AIzaSyCwsl4qdsUKUA3pWlAV6xiL14_d3aU9_90",
    authDomain: "studybooktest.firebaseapp.com",
    databaseURL: "https://studybooktest.firebaseio.com",
    projectId: "studybooktest",
    storageBucket: "studybooktest.appspot.com",
    messagingSenderId: "801938444718"
};

firebase.initializeApp(config);
//let postId;
const database = firebase.database();
let PostsArray = database.ref('posts');
PostsArray.on("value", function(snapshot) {
    let returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    // postId = returnArr.length;
console.log(snapshot.val()[2]);
});




//new post button
$('.newPostButton').on('click',openDialog);
//submit button
$('.newPostSubmit').on('click',newPost);
//cancel button
$('.newPostCancel').on('click',closeDialog);

//dialog container
let dialog = $('.dialogContainer');

//send new post data
function newPost(){
    let newPostMessage = $('.newPostMessage').val();
    let classSelection = $('#classSelect').val()
    let push = database.ref().child('/posts').push();
    let pushKey = push.key;
    let newPostData = {
        postId: pushKey,
        poster: 'default user',
        text: newPostMessage,
        class: classSelection,
        chat: [{name: 'StuddyBook',
        text: 'ready for first reply'}]
    };
    console.log(newPostData);
    push.set(newPostData);
    closeDialog();
}
//open dialog box
function openDialog(){
    if( dialog.hasClass('hide')){
        $('.dialogContainer').removeClass('hide')
    }
    dialog.addClass('show');
}
//close dialog box
function closeDialog(){
        if( dialog.hasClass('show')){
            dialog.removeClass('show')
        }
        $('.newPostMessage').val('');
        dialog.addClass('hide');
}
