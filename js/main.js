document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready!");

  // create form for Github username
  const githubForm = document.createElement("form");
  githubForm.id = "githubForm";

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";
  usernameInput.placeholder = "Github Username ";

  function fetchUserData() {
    fetch("https://api.github.com/users/JGRANT024")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the value of the username input field to the retrieved username
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }

  //  creates label for username
  const userNameLabel = document.createElement("label");
  userNameLabel.textContent = "Username";

  const submitButton = document.createElement("button");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  // Handle form submission
  githubForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;

    console.log("Submitted username:", username);
    // You can add further processing or submission logic here
  });

  // adds items to username and input
  githubForm.appendChild(userNameLabel);
  githubForm.appendChild(usernameInput);
  githubForm.appendChild(submitButton);

  // adds form to DOM
  document.body.appendChild(githubForm);
  fetchUserData();
});
