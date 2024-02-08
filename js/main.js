document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready!");

  // create form for Github username
  const githubForm = document.createElement("form");
  githubForm.id = "githubForm";

  const userNameLabel = document.createElement("label");
  userNameLabel.textContent = "Username";

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  console.log(submitButton);

  githubForm.appendChild(userNameLabel);
  githubForm.appendChild(usernameInput);

  document.body.appendChild(githubForm);
});
