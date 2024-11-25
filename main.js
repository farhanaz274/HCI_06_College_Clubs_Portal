const validCredentials = {
    username: "2303A51374",
    password: "Student@2023" 
};

function handleLogin(event) {
    event.preventDefault(); 

    const x = document.getElementById("a").value; 
    const y = document.getElementById("b").value; 

    
    if (!x || !y) {
        alert("Please fill in both fields.");
        return; 
    }

    if (x === validCredentials.username && y === validCredentials.password) {
        window.location.href = "index1.html";
    } else {
        alert("Enter valid credentials");
    }
}