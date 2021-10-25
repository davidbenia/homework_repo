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

const getPassedUsersFirstVideoTitle = async (user) =>
{
  try
  {
    let login_res = await loginUser(user, 1234);
    let get_videos_res = await getUserVideos(login_res["userEmail"]);
    let video_details_res = await videoDetails(get_videos_res[0]);
    console.log('user: ', login_res);
    console.log('videos: ', get_videos_res);
    console.log(`title: ${video_details_res}`);
  }
  catch(reject_res)
  {
    displayError(reject_res);
  }
}

function displayError(errorMessage)
{
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");