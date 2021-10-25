console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password)
{
  return new Promise((resolve, reject) => 
  {
    if(email in usersDB)
    {
      setTimeout(() => 
      {
        console.log(`Now we have the data of user: ${email}`);
        resolve({userEmail: email});
      }, 3000);
    }
    else reject("User not found!");
  });
}

function getUserVideos(email)
{
  return new Promise((resolve, reject) => 
  {
    if(usersDB[email].length > 0)
    {
      setTimeout(() => resolve(usersDB[email]), 2000);
    }
    else reject("Videos not found!");
  });
}

function videoDetails(video)
{
  return new Promise((resolve, reject) =>
  {
    if("title" in video)
    {
      setTimeout(() => resolve(video["title"]), 2000);
    }
    else reject("Video Title not found!");
  });
}

const getPassedUsersFirstVideoTitle = (user) =>
{
  loginUser(user, 1234)
  .then((user) => 
  {
    console.log('user: ', user);
    getUserVideos(user["userEmail"]);
  })
  .then((videos) => 
  {
    console.log('videos: ', videos);
    videoDetails(videos[0]);
  })
  .then((video_title) => 
  {
    console.log(`title: ${video_title}`);
  })
  .catch((reject_res) => displayError(reject_res))
}

function displayError(errorMessage)
{
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");