console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, resolve_callback, reject_callback)
{
  if(email in usersDB)
  {
    setTimeout(() => 
    {
      console.log(`Now we have the data of user: ${email}`);
      resolve_callback({userEmail: email});
    }, 3000);
  }
  else reject_callback("User not found!");
}

function getUserVideos(email, resolve_callback, reject_callback)
{
  if(usersDB[email].length > 0)
  {
    setTimeout(() => resolve_callback(usersDB[email]), 2000);
  }
  else reject_callback("Videos not found!");
}

function videoDetails(video, resolve_callback, reject_callback)
{
  if("title" in video)
  {
    setTimeout(() => resolve_callback(video["title"]), 2000);
  }
  else reject_callback("Video Title not found!");
}

const getPassedUsersFirstVideoTitle = (user) =>
{
  loginUser(user, 1234, (user) => 
  {
    console.log('user: ', user);
    getUserVideos(user["userEmail"], (videos) => 
    {
      console.log('videos: ', videos);
      videoDetails(videos[0], (video_title) =>
      {
        console.log(`title: ${video_title}`);
      }, displayError);
    }, displayError);
  }, displayError);
}

function displayError(errorMessage)
{
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");