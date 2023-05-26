// Copyright: Sean I. O'Donoghue
// Replace Login.vue; Work out if user is logged in.
// Status: basic call works nicely; check response for
// TODO: remove Origin header > fix backend to disable fetching

const log = (message) => console.log(message); // eslint-disable-line
let API = "http://localhost:3000/api/v1";

export async function call_the_backend_api(email, showcase) {
  // https://dmitripavlutin.com/timeout-fetch-request/
  const timeout = 8000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(`${API}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question:
          "Write a JavaScript function that uses D3.js to generate a sample scatter plot.",
      }),
      signal: controller.signal,
    });
    clearTimeout(id);
    return await response.json();
  } catch (error) {
    let message = "No response from VIZBI backend";
    console.error(`${message}: ${error}`);
    return {error: message};
  }
  // https://vuejs.org/guide/reusability/composables.html#return-values
}

let output = (async function () {
  let email = "test@gmail.com"; // test@gmail.com | sean@odonoghuelab.org
  let response = await call_the_backend_api(email, "Masterclass 2023");
  return JSON.stringify(response); // 10
})(); //?
output;
output;
let a = 10 + 30;
a;
