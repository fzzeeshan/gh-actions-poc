import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 2 }, // 5 virtual users for 10 seconds
  ],
};

export default function () {
  let response = http.get("https://jsonplaceholder.typicode.com/posts"); // Replace with your API endpoint URL
  console.log(response.body);
  sleep(1); // 1 second pause between each request
}
