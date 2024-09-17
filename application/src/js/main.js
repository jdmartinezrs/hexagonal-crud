// document.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     let data = Object.fromEntries(new FormData(e.target));
//     let config = {
//         method: e.target.method,
//         headers: { 'Content-Type': 'application/json' ,
//       "x-version": "1.1.0"},
//         body: JSON.stringify(data) // Fixed typo here
//     };
//     try {
//         let response = await fetch(e.target.action, config);
//         let result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error('Error:', error);
//         location.href = "/home/v1.1.0"
//     }
// });



